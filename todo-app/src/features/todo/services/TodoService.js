const STORAGE_KEY = "todos";

export const todoService = {
  getTodos() {
    const todos = localStorage.getItem(STORAGE_KEY);

    return todos ? JSON.parse(todos) : [];
  },

  saveTodos(todos) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(todos)
    );
  },
};