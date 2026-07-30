import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

import DashboardPage from "../features/dashboard/page/DashboardPage";
import TodoPage from "../features/todo/pages/TodoPage";
import WeatherPage from "../features/weather/page/WeatherPage";
import ProfilePage from "../features/profile/pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";

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
            <TodoPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/weather"
        element={
          <ProtectedRoute>
            <WeatherPage />
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