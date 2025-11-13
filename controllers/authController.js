import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // CHeck if user already exists
        const exsistingUser = await User.findOne({ email });
        if (exsistingUser) return res.status(400).json({
            message: "User already existed"
        })

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({
            message: "User registered successfully", user: newUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};