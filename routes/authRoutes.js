import express from "express";
import { registerUser } from "../controllers/authCOntroller";
import { loginUser } from "../controllers/authCOntroller";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
