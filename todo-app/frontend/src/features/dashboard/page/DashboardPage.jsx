import { useNavigate } from "react-router-dom";
import "../style/DashboardPage.css";

function DashboardPage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">

        <button
          className="dashboard-btn"
          onClick={() => navigate("/profile")}
        >
          👨🏻‍💼 Profile
        </button>

        {user?.role === "admin" && (
          <button
            className="dashboard-btn"
            onClick={() => navigate("/admin")}
          >
            👑 Admin
          </button>
        )}

        <button
          className="dashboard-btn logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

      <div className="dashboard-card">
        <h1>Productivity Dashboard</h1>

        <p>Select a feature to continue</p>

        <div className="dashboard-buttons">

          {/* Todo Button */}
          {user?.permissions?.includes("todo") && (
            <button
              className="dashboard-btn"
              onClick={() => navigate("/todo")}
            >
              📝 Todo App
            </button>
          )}

          {/* Weather Button */}
          {user?.permissions?.includes("weather") && (
            <button
              className="dashboard-btn"
              onClick={() => navigate("/weather")}
            >
              🌤 Weather App
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default DashboardPage;