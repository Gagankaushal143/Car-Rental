import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createCar, deleteCar, getAllCar, getCarById, updateCar } from "../controllers/car.controller.js";

const router = express.Router();

router.post("/", protect, createCar);
router.get("/", getAllCar);
router.get("/:id", getCarById);
router.put("/:id", protect, updateCar);
router.delete("/:id",protect, deleteCar);

export default router;