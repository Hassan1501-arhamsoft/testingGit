import { useState } from "react";
import { authService } from "../services/authService";

function useAuth() {
  const [loading, setLoading] = useState(false);

  // Register
  const register = async (userData) => {
    try {
      setLoading(true);

      const response = await authService.register(userData);

      return response;
    // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (userData) => {
    try {
      setLoading(true);

      const response = await authService.login(userData);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      return response;
    // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
  };

  // Check Login Status
  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return {
    loading,
    register,
    login,
    logout,
    isAuthenticated,
  };
}

export default useAuth;