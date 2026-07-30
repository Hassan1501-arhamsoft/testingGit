import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ERROR_MESSAGES } from "../utils/constants.js";

// Register User
export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  // Check if email already exists
  const existingUser = await User.findOne({ email });
 
  
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Generate Salt
  const salt = await bcrypt.genSalt(10);
  

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};

// Login User
export const loginUser = async (userData) => {
  const { email, password } = userData;

  // Find User
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare Password
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT Token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};