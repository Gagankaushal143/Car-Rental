import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createCar } from "../controllers/car.controller.js";

const router = express.Router();

router.post("/", protect, createCar);

export default router;