import {
  registerUser,
  loginUser,
} from "../services/auth.service.js";
import { successResponse } from "../utils/response.js";

export const register = async (req, res, next) => {

  try {
    const user = await registerUser(req.body);
    res.status(201).json(
      successResponse(user, "Registered", 201)
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Login
export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);

    res.status(200).json(
      successResponse(
        result,
        "Login successful",
        200
      )
    );
  } catch (error) {
    next(error);
  }
};