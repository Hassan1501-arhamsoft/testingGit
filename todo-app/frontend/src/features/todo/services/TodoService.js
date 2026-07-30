const API_URL = "http://localhost:5000/api/todos";

const getHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const todoService = {
  // Get All Todos
  async getTodos() {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: getHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch todos");
    }

    return data;
  },

  // Add Todo
  async addTodo(title) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ title }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add todo");
    }

    return data;
  },

  // Delete Todo
  async deleteTodo(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete todo");
    }

    return data;
  },

  // Toggle Todo
  async toggleTodo(id) {
    const response = await fetch(`${API_URL}/${id}/complete`, {
      method: "PATCH",
      headers: getHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update todo");
    }

    return data;
  },

  // Edit Todo
  async editTodo(id, title) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify({ title }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to edit todo");
    }

    return data;
  },
};