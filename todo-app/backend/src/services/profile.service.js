import User from "../models/user.model.js";

// Get Logged-in User Profile
export const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};

// Upload / Update Profile Image
export const updateProfileImage = async (userId, file) => {
  if (!file) {
    throw new Error("Please upload an image.");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  // Save image path in database
  user.profileImage = file.path;

  await user.save();

  // Don't send password back
  user.password = undefined;

  return user;
};