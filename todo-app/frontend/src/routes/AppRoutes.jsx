import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

import DashboardPage from "../features/dashboard/page/DashboardPage";
import TodoPage from "../features/todo/pages/TodoPage";
import WeatherPage from "../features/weather/page/WeatherPage";
import ProfilePage from "../features/profile/pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import AdminPage from "../features/admin/pages/AdminPage";
import AdminRoute from "./AdminRoute";
import PermissionRoute from "./PermissionRoute";
function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        }
      />
      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/todo"
        element={
          <ProtectedRoute>
            <PermissionRoute permission="todo">
              <TodoPage />
            </PermissionRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/weather"
        element={
          <ProtectedRoute>
            <PermissionRoute permission="weather">
              <WeatherPage />
            </PermissionRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<h2>404 - Page Not Found</h2>}
      />
    </Routes>
  );
}

export default AppRoutes;