export const successResponse = (
  data = null,
  message = "Success",
  statusCode = 200
) => {
  return {
    success: true,
    statusCode,
    message,
    data,
  };
};

export const errorResponse = (
  message = "Something went wrong",
  statusCode = 500,
  errors = null
) => {
  return {
    success: false,
    statusCode,
    message,
    errors,
  };
};