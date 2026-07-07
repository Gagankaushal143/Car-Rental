import { model } from "mongoose";
import Car from "../models/Car.js";

export const createCar = async (req, res) => {
    try {
        const { title, brand, model, year, fuelType, transmission, seats, pricePerDay, location, description, mileage, category } = req.body;

        if (!title?.trim() || !brand?.trim() || !model?.trim() || !year || !fuelType?.trim() || !transmission?.trim() || !seats || !pricePerDay || !location?.trim() || !description?.trim() || !mileage || !category?.trim()) {
            return res.status(400).json({
                success: false,
                message: "All fields are required !",
            });
        }

        const car = await Car.create({
            title,
            brand,
            model,
            year,
            fuelType,
            transmission,
            seats,
            pricePerDay,
            location,
            description,
            mileage,
            category,
            owner: req.user.userId,
        });


        return res.status(201).json({
            success: true,
            message: "Car added successfully !",
            data: car,
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}


export const getAllCar = async (req, res) => {
    try {
        const { search, brand, fuelType, minPrice, maxPrice, minSeats, sort } = req.query;

        let query = {};
        const searchTerm = search?.trim();

        if (searchTerm) {
            query.$or = [
                {
                    title: {
                        $regex: searchTerm,
                        $options: "i",
                    },
                },
                {
                    brand: {
                        $regex: searchTerm,
                        $options: "i",
                    },
                },
                {
                    model: {
                        $regex: searchTerm,
                        $options: "i",
                    },
                },
                {
                    location: {
                        $regex: searchTerm,
                        $options: "i",
                    },
                },
            ];
        }

        const brandName = brand?.trim();

        if (brandName) {
            query.brand = {
                $regex: brandName,
                $options: "i",
            }
        }

        const fuel = fuelType?.trim();
        if (fuel) {
            query.fuelType = {
                $regex: fuel,
                $options: "i",
            };
        }


        if (minPrice || maxPrice) {
            query.pricePerDay = {};

            if (minPrice) {
                query.pricePerDay.$gte = Number(minPrice);
            }
            if (maxPrice) {
                query.pricePerDay.$lte = Number(maxPrice);
            }
        }

        if (minSeats) {
            query.seats = {
                $gte: Number(minSeats),
            }
        }

        // const cars = await Car.find(query);

        let sortOption = {};

        if (sort === "price-low") {
            sortOption.pricePerDay = 1;
        }

        if (sort === "price-high") {
            sortOption.pricePerDay = -1;
        }

        if (sort === "newest") {
            sortOption.createdAt = -1;
        }

        if (sort === "oldest") {
            sortOption.createdAt = 1;
        }

        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalCars = await Car.countDocuments(query);

        const cars = await Car.find(query).sort(sortOption).skip(skip).limit(limit);
        return res.status(200).json({
            success: true,
            currentPage: page,
            totalPages: Math.ceil(totalCars / limit),
            totalCars,
            data: cars,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


export const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found !"
            })
        }
        return res.status(200).json({
            success: true,
            data: car,
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


export const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(req.params.id);
        if(!car){
            return res.status(404).json({
                success : false,
                message : "Car not found !",
            })
        }

        if(car.owner.toString() !== req.user.userId){
            return res.status(403).json({
                success : false,
                message : "You are not authorized to update this car !"
            });
        }

        const {
            title,
            brand,
            model,
            year,
            fuelType,
            transmission,
            seats,
            pricePerDay,
            location,
            description,
            mileage,
            category,
        } = req.body;

        if (
            !title?.trim() &&
            !brand?.trim() &&
            !model?.trim() &&
            !year &&
            !fuelType?.trim() &&
            !transmission?.trim() &&
            !seats &&
            !pricePerDay &&
            !location?.trim() &&
            !description?.trim() &&
            !mileage &&
            !category?.trim()
        ){
            return res.status(400).json({
                success : false,
                message : "Please provide at least one field to update !"
            });
        }

        const updateData = {};

        if (title?.trim()) updateData.title = title.trim();
        if (brand?.trim()) updateData.brand = brand.trim();
        if (model?.trim()) updateData.model = model.trim();
        if (year) updateData.year = year;
        if (fuelType?.trim()) updateData.fuelType = fuelType.trim();
        if (transmission?.trim()) updateData.transmission = transmission.trim();
        if (seats) updateData.seats = seats;
        if (pricePerDay) updateData.pricePerDay = pricePerDay;
        if (location?.trim()) updateData.location = location.trim();
        if (description?.trim()) updateData.description = description.trim();
        if (mileage) updateData.mileage = mileage;
        if (category?.trim()) updateData.category = category.trim();

         const updatedCar = await Car.findByIdAndUpdate(
            id,
            updateData,
            {
                new : true,
            }
        )

        return res.status(200).json({
            success : true,
            message : "Car updated successfully",
            data : updateCar,
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


export const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;

        const car = await Car.findById(req.params.id);
        if(!car){
            return res.status(404).json({
                success : false,
                message : "Car not found !",
            });
        }

        if(car.owner.toString() !== req.user.userId){
            return res.status(403).json({
                success : false,
                message : "You are not authorized to delete this car",
            });
        }

        await Car.findByIdAndDelete(id);
        
        return res.status(200).json({
            success : true,
            message : "Car deleted successfully !",
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}