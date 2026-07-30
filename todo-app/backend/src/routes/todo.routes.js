import { Router } from "express";
import { protect } from "../middleware/auth.middleware.js";


import {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  completeTodo,
} from "../controllers/todo.controller.js";

import {
  validateTaskMiddleware,
  validateTaskIdMiddleware,
} from "../middleware/validation.middleware.js";
import { checkTodoPermission } from "../middleware/permission.middleware.js";
const router = Router();
router.use(protect);
router.use(checkTodoPermission);
// Create Todo
router.post(
  "/todos",
  validateTaskMiddleware,
  createTodo
);

// Get All Todos
router.get(
  "/todos",
  getAllTodos
);

// Get Todo By ID
router.get(
  "/todos/:id",
  validateTaskIdMiddleware,
  getTodoById
);

// Update Todo
router.put(
  "/todos/:id",
  validateTaskIdMiddleware,
  validateTaskMiddleware,
  updateTodo
);

// Complete Todo
router.patch(
  "/todos/:id/complete",
  validateTaskIdMiddleware,
  completeTodo
);

// Delete Todo
router.delete(
  "/todos/:id",
  validateTaskIdMiddleware,
  deleteTodo
);

export default router;