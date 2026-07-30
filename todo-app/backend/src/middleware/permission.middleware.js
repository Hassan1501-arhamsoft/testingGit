import { errorResponse } from "../utils/response.js";

export const checkTodoPermission = (req, res, next) => {
  if (!req.user.permissions.todo) {
    return res.status(403).json(
      errorResponse("Todo access denied.", 403)
    );
  }

  next();
};

export const checkWeatherPermission = (req, res, next) => {
  if (!req.user.permissions.weather) {
    return res.status(403).json(
      errorResponse("Weather access denied.", 403)
    );
  }

  next();
};