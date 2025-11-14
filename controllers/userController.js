import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Get all users
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// Update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });
  res.json(user);
};

// Delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "User deleted successfully" });
};
