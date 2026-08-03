import User from "../models/user.model.js";

// Get All Users
export const getAllUsers = async () => {
  const users = await User.find().select("-password");

  return users;
};

// Update User Permissions
export const updateUserPermissions = async (
  userId,
  permissions
) => {
  // Ensure permissions is always an array
  if (!Array.isArray(permissions)) {
    throw new Error("Permissions must be an array.");
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      permissions,
    },
    {
      new: true,
      runValidators: true,
    }
  ).select("-password");

  if (!updatedUser) {
    throw new Error("User not found.");
  }

  return updatedUser;
};