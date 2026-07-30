import {
  getAllUsers,
  updateUserPermissions,
} from "../services/admin.service.js";

import {
  successResponse,
  errorResponse,
} from "../utils/response.js";

// Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();

    return res.json(
      successResponse(users, "Users fetched successfully")
    );
  } catch (error) {
    return res
      .status(500)
      .json(errorResponse(error.message, 500));
  }
};

// Update Permissions
export const updatePermissions = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await updateUserPermissions(
      id,
      req.body.permissions
    );

    return res.json(
      successResponse(
        updatedUser,
        "Permissions updated successfully"
      )
    );
  } catch (error) {
    return res
      .status(500)
      .json(errorResponse(error.message, 500));
  }
};