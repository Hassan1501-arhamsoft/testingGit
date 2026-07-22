import { Routes, Route } from "react-router-dom";

import DashboardPage from "../features/dashboard/page/DashboardPage";
import TodoPage from "../features/todo/pages/TodoPage";
import WeatherPage from "../features/weather/page/WeatherPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />

      <Route path="/todo" element={<TodoPage />} />

      <Route
        path="/weather"
        element={<WeatherPage />}
      />
    </Routes>
  );
}

export default AppRoutes;