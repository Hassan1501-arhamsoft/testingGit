const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export const weatherService = {
  async getCurrentWeather(city) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data.");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  },
};