import { errorResponse } from "../utils/response.js";

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json(
      errorResponse("Access denied. Admin only.", 403)
    );
  }

  next();
};