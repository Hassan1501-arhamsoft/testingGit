import express from "express";

import {
  getUsers,
  updatePermissions,
} from "../controllers/admin.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

// Only Admin Can Access
router.use(protect);
router.use(isAdmin);

// Get All Users
router.get("/users", getUsers);

// Update Permissions
router.put(
  "/users/:id/permissions",
  updatePermissions
);

export default router;