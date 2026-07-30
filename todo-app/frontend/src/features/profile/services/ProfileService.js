const API_URL = "http://localhost:5000/api/profile";

export const profileService = {
  // Get Logged-in User Profile
  async getProfile() {
    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch profile.");
    }

    return data;
  },

  // Upload / Update Profile Image
  async uploadProfileImage(file) {
    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("profileImage", file);

    const response = await fetch(`${API_URL}/upload`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to upload image.");
    }

    return data;
  },
};