import Button from "../../../components/common/Button/Button";
import WeatherCard from "../components/WeatherCard";
import { useNavigate } from "react-router-dom";
import "../style/WeatherPage.css";
function WeatherPage() {
  const navigate = useNavigate();
  return (
    <div className="weather-page">
      <div className="back-button">

      <Button onClick={() => navigate("/dashboard")}>
    ← Back to Dashboard
    </Button>
      </div>
      <WeatherCard />
    </div>
  );
}

export default WeatherPage;