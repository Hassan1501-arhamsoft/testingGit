import * as todoService from "../services/todo.service.js";
import {
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
} from "../utils/constants.js";
import {
  successResponse,
  errorResponse,
} from "../utils/response.js";

// Create Todo
export const createTodo = async (req, res, next) => {
  try {
    const todo = await todoService.createTodo(
      req.body,
      req.user._id
    );

    res.status(201).json(
      successResponse(
        todo,
        SUCCESS_MESSAGES.TASK_CREATED,
        201
      )
    );
  } catch (error) {
    next(error);
  }
};

// Get All Todos
export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getAllTodos(
      req.user._id
    );

    res.status(200).json(
      successResponse(
        todos,
        SUCCESS_MESSAGES.TASKS_FETCHED
      )
    );
  } catch (error) {
    next(error);
  }
};

// Get Todo By Id
export const getTodoById = async (req, res, next) => {
  try {
    const todo = await todoService.getTodoById(
      req.params.id,
      req.user._id
    );

    res.status(200).json(
      successResponse(
        todo,
        SUCCESS_MESSAGES.TASK_FETCHED
      )
    );
  } catch (error) {
    if (error.message === ERROR_MESSAGES.TASK_NOT_FOUND) {
      return res.status(404).json(
        errorResponse(
          ERROR_MESSAGES.TASK_NOT_FOUND,
          404
        )
      );
    }

    next(error);
  }
};

// Update Todo
export const updateTodo = async (req, res, next) => {
  try {
    const todo = await todoService.updateTodo(
      req.params.id,
      req.body,
      req.user._id
    );

    res.status(200).json(
      successResponse(
        todo,
        SUCCESS_MESSAGES.TASK_UPDATED
      )
    );
  } catch (error) {
    next(error);
  }
};

// Complete Todo
export const completeTodo = async (req, res, next) => {
  try {
    const todo = await todoService.completeTodo(
      req.params.id,
      req.user._id
    );

    res.status(200).json(
      successResponse(
        todo,
        SUCCESS_MESSAGES.TASK_COMPLETED
      )
    );
  } catch (error) {
    next(error);
  }
};

// Delete Todo
export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await todoService.deleteTodo(
      req.params.id,
      req.user._id
    );

    res.status(200).json(
      successResponse(
        todo,
        SUCCESS_MESSAGES.TASK_DELETED
      )
    );
  } catch (error) {
    next(error);
  }
};