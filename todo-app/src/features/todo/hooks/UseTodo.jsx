import { useEffect, useState } from "react";
import { todoService } from "../services/TodoService";

function useTodos() {
  const [todos, setTodos] = useState(() => {
    return todoService.getTodos();
  });

  useEffect(() => {
    todoService.saveTodos(todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const editTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title,
            }
          : todo
      )
    );
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