import { errorResponse } from "../utils/response.js";

// Generic Permission Middleware
export const checkPermission = (permission) => {
  return (req, res, next) => {
    // Check if user has the required permission
    if (!req.user.permissions.includes(permission)) {
      return res.status(403).json(
        errorResponse(`${permission} access denied.`, 403)
      );
    }

    next();
  };
};