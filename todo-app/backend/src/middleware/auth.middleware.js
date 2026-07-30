import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorResponse } from "../utils/response.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json(
        errorResponse("Not authorized. Token missing.", 401)
      );
    }

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find User
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json(
        errorResponse("User not found.", 401)
      );
    }

    // Attach user to request
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json(
      errorResponse("Invalid or expired token.", 401)
    );
  }
};