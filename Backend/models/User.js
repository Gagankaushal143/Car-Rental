import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            trim: true,
        },

        lastName:{
            type: String,
            required: true,
            trim: true,
        },

        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password:{
            type: String,
            required: true,
        },

        phone:{
            type: String,
            required: true,
        },

        avatar:{
            type: String,
            default: "",
        },

        role:{
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        isVerified:{
            type: Boolean,
            default: false,
        },

        isBlocked:{
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("user", userSchema);

export default User;