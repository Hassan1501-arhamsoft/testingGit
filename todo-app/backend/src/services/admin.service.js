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
    throw new Error("User not found");
  }

  return updatedUser;
};