import { useEffect, useState } from "react";
import { adminService } from "../services/adminService";

function useAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load All Users
  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await adminService.getUsers();

      // Your backend returns successResponse(data, message)
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update Permissions
  const updatePermissions = async (userId, permissions) => {
    try {
      setLoading(true);
      setError("");

      await adminService.updatePermissions(userId, permissions);

      // Refresh list after updating
      await loadUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loading,
    error,
    updatePermissions,
    loadUsers,
  };
}

export default useAdmin;