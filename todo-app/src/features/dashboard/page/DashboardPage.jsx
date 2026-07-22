import { useNavigate } from "react-router-dom";
import "../style/DashboardPage.css";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h1>Productivity Dashboard</h1>

        <p>Select a feature to continue</p>

        <div className="dashboard-buttons">
          <button
            className="dashboard-btn"
            onClick={() => navigate("/todo")}
          >
            📝 Todo App
          </button>

          <button
            className="dashboard-btn"
            onClick={() => navigate("/weather")}
          >
            🌤 Weather App
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;