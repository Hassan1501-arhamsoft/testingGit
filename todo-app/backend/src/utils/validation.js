import mongoose from "mongoose";

export const validateTask = (taskData) => {
  const errors = [];

  if (!taskData.title || taskData.title.trim() === "") {
    errors.push("Title is required.");
  }

  if (taskData.title && taskData.title.trim().length < 3) {
    errors.push("Title must be at least 3 characters long.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const isValidId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};