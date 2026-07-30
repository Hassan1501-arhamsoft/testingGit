import { useEffect, useState } from "react";
import { todoService } from "../services/TodoService";

function useTodos() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const data = await todoService.getTodos();
      setTodos(data.data); // If your API returns { success, data }
      // If your API returns only an array, use: setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (title) => {
    await todoService.addTodo(title);
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await todoService.deleteTodo(id);
    loadTodos();
  };

  const toggleTodo = async (id) => {
    await todoService.toggleTodo(id);
    loadTodos();
  };

  const editTodo = async (id, title) => {
    await todoService.editTodo(id, title);
    loadTodos();
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };
}

export default useTodos;