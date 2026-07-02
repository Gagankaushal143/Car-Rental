import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected`);
    }
    catch(error){
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
        // process.exit(1);
        console.log(error);
    }
};

export default connectDB;