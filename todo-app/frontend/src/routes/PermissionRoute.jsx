import { Navigate } from "react-router-dom";

function PermissionRoute({ permission, children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // User not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User doesn't have permission
  if (!user.permissions?.includes(permission)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PermissionRoute;