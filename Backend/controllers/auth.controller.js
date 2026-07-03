import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {

    try {
        const { firstName, lastName, email, password, phone } = req.body;

        if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !password?.trim() || !phone?.trim()) {
            return res.status(400).json({
                success: false,
                message: "All fields are required !",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists !",
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
        })

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        return res.status(201).json({
            success: true,
            message: "User registered successfully ",
            token,
            data: {
                id: user._id,
                firstName: user.firstName,
                email: user.email,
            },
        })

    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }

};

export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            })
        }
        return res.status(200).json({
            success: true,
            user,
        })
    }
    catch(error){
        return res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email?.trim() || !password?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required !",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password !",
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password !"
            })
        }

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        )

        return res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            data: {
                userId: user._id,
                firstName: user.firstName,
                email: user.email,
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


export const updateProfile = async (req, res) =>{
    try{
        const {firstName, lastName, phone, avatar} = req.body;
        if(!firstName?.trim() && !lastName?.trim() && !phone?.trim()){
            return res.status(400).json({
                success : false,
                message : "At least one field is required to update !"
            })
        }

        const updateData = {};

        if(firstName?.trim()) updateData.firstName = firstName.trim();
        if(lastName?.trim()) updateData.lastName = lastName.trim();
        if(phone?.trim()) updateData.phone = phone.trim();
        if(avatar) updateData.avatar = avatar;

        const user = await User.findByIdAndUpdate(
            req.user.userId,
            updateData,
            {
                new : true,
            }
        ).select("-password")

        return res.status(200).json({
            success : true, 
            message : "Profile updated successfully !",
            data : user
        })
    }
    catch(error){
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
        });
    }
}