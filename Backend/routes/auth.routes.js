import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
import {getCurrentUser} from "../controllers/auth.controller.js"
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/me", protect, getCurrentUser);

export default router;