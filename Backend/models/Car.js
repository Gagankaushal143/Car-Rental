import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
    {
        title: {
            type : String,
            required : true,
            trim : true
        },

        brand: {
            type : String,
            required : true,
            trim : true,
        },

        model: {
            type : String,
            required : true,
            trim : true,
        },

        year: {
            type : Number,
            required : true,
        },

        fuelType: {
            type : String,
            required : true,
            trim : true,
        },

        transmission: {
            type : String,
            required : true,
            trim : true,
        },

        seats: {
            type : Number,
            required : true,
        },

        pricePerDay: {
            type : Number,
            required : true,
        },

        location: {
            type : String,
            required : true,
            trim : true,
        },

        images: [
            {
                type : String,
                default : [],
            },
        ],

        isAvailable: {
            type : Boolean,
            default : true,
        },

        owner: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
        },

        description: {
            type : String,
            required : true,
            trim : true,
        },

        mileage: {
            type : Number,
            required : true,
        },

        category: {
            type : String,
            required : true,
            trim : true,
        }
    },
    {
        timestamps: true
    }
)

const Car = mongoose.model("car", carSchema);

export default Car;