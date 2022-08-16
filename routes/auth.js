import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router =express.Router();

// CREATING USER

router.post("/signup", signup)

// SIGN IN

router.post("/signin", signin)

// GOOGLE AUTH 
router.post("/google", )

export default router;