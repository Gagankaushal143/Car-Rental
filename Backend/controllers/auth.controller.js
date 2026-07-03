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
            password : hashedPassword,
            phone,
        })

        const token = jwt.sign(
            {
                userId : user._id,
                role : user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn : "7d"
            }
        )
        
        return res.status(201).json({
            success : true,
            message : "User registered successfully ",
            token,
            data: {
                id : user._id,
                firstName : user.firstName,
                email : user.email,
            },
        })

    }
    
    catch(error){
        return res.status(500).json({
            success: false,
            message : "Internal Server Error",
        });
    }

};

export const getCurrentUser = (req, res) =>{

    
    return res.status(200).json({
        success : true,
        user : req.user,
        // message : "Protected route accessed",
    })
    console.log(req.user);
}