const API_URL = "http://localhost:5000/api/admin";

const getHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const adminService = {
  // Get All Users
  async getUsers() {
    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: getHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch users");
    }

    return data;
  },

  // Update User Permissions
  async updatePermissions(userId, permissions) {
    const response = await fetch(
      `${API_URL}/users/${userId}/permissions`,
      {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify({ permissions }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to update permissions"
      );
    }

    return data;
  },
};