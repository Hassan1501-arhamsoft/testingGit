import { useEffect, useState } from "react";
import { weatherService } from "../services/WeatherService";

function useWeather(defaultCity = "Lahore") {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName = city) => {
    try {
      setLoading(true);
      setError("");

      const data = await weatherService.getCurrentWeather(cityName);

      setWeather(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return {
    city,
    setCity,
    weather,
    loading,
    error,
    fetchWeather,
  };
}

export default useWeather;