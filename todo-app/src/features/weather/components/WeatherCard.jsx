import { useState } from "react";
import useWeather from "../hooks/UseWeather";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import "../style/WeatherCard.css";

function WeatherCard() {
  const {
    weather,
    loading,
    error,
    fetchWeather,
  } = useWeather();

  const [searchCity, setSearchCity] = useState("");

  const handleSearch = () => {
    if (!searchCity.trim()) return;

    fetchWeather(searchCity);
    setSearchCity("");
  };

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="weather-card">
      <h2>🌤 Weather</h2>

      <div className="weather-search">
        <Input
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter city name"
        />

        <Button onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div className="weather-info">
        <h3>{weather.location.name}</h3>

        <p>
          <strong>Country:</strong>{" "}
          {weather.location.country}
        </p>

        <p>
          <strong>Temperature:</strong>{" "}
          {weather.current.temp_c} °C
        </p>

        <p>
          <strong>Condition:</strong>{" "}
          {weather.current.condition.text}
        </p>

        <p>
          <strong>Humidity:</strong>{" "}
          {weather.current.humidity}%
        </p>

        <p>
          <strong>Wind:</strong>{" "}
          {weather.current.wind_kph} km/h
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;