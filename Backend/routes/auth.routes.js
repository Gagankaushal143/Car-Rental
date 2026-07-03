import express from "express";
import {registerUser, getCurrentUser, loginUser, updateProfile} from "../controllers/auth.controller.js"
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/me", protect, getCurrentUser);
router.put("/profile", protect, updateProfile)

export default router;