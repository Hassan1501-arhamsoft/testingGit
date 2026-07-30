import { ERROR_MESSAGES } from "../utils/constants.js";
import { errorResponse } from "../utils/response.js";

const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  if (err.message === ERROR_MESSAGES.TASK_NOT_FOUND) {
    return res.status(404).json(
      errorResponse(ERROR_MESSAGES.TASK_NOT_FOUND, 404)
    );
  }

  return res.status(500).json(
    errorResponse(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, 500)
  );
};

export default errorMiddleware;