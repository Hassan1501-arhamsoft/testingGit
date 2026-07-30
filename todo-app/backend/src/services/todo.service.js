import Todo from "../models/todo.model.js";
import { ERROR_MESSAGES } from "../utils/constants.js";

// Create Todo
export const createTodo = async (todoData, userId) => {
  const newTodo = await Todo.create({
    title: todoData.title,
    user: userId,
  });

  return newTodo;
};

// Get All Todos
export const getAllTodos = async (userId) => {
  return await Todo.find({ user: userId });
};

// Get Todo By Id
export const getTodoById = async (id, userId) => {
  const todo = await Todo.findOne({
    _id: id,
    user: userId,
  });

  if (!todo) {
    throw new Error(ERROR_MESSAGES.TASK_NOT_FOUND);
  }

  return todo;
};

// Update Todo
export const updateTodo = async (id, todoData, userId) => {
  const updatedTodo = await Todo.findOneAndUpdate(
    {
      _id: id,
      user: userId,
    },
    {
      title: todoData.title,
    },
    {
      returnDocument: "after",
      runValidators: true,
    }
  );

  if (!updatedTodo) {
    throw new Error(ERROR_MESSAGES.TASK_NOT_FOUND);
  }

  return updatedTodo;
};

// Complete Todo
export const completeTodo = async (id, userId) => {
  const completedTodo = await Todo.findOneAndUpdate(
    {
      _id: id,
      user: userId,
    },
    {
      completed: true,
    },
    {
      returnDocument: "after",
    }
  );

  if (!completedTodo) {
    throw new Error(ERROR_MESSAGES.TASK_NOT_FOUND);
  }

  return completedTodo;
};

// Delete Todo
export const deleteTodo = async (id, userId) => {
  const deletedTodo = await Todo.findOneAndDelete({
    _id: id,
    user: userId,
  });

  if (!deletedTodo) {
    throw new Error(ERROR_MESSAGES.TASK_NOT_FOUND);
  }

  return deletedTodo;
};