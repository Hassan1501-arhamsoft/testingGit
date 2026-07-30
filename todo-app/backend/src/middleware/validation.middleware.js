import { validateTask, isValidId } from "../utils/validation.js";
import { errorResponse } from "../utils/response.js";

export const validateTaskMiddleware = (req, res, next) => {
  const { isValid, errors } = validateTask(req.body);

  if (!isValid) {
    return res.status(400).json(
      errorResponse("Validation failed", 400, errors)
    );
  }

  next();
};

export const validateTaskIdMiddleware = (req, res, next) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json(
      errorResponse("Invalid task id", 400)
    );
  }

  next();
};