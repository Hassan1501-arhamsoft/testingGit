import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // User not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User is not admin
  if (user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default AdminRoute;