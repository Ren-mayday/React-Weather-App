import { useState } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./components/SearchForm";

import "./App.css";

function App(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  }

  function handleWeatherData(response) {
    setWeatherData({
      city: response.data.city,
      time: new Date(response.data.time * 1000).toLocaleDateString("en-US", { weekday: "long" }),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  return (
    <main>
      <button className="theme-toggle" onClick={toggleTheme}></button>
      <div className="weatherContainer">
        <h1>Weather App</h1>
        <SearchForm handleWeatherData={handleWeatherData} />

        {weatherData && (
          <div className="weatherInfo">
            <div className="city-date">
              <h2 className="city">{weatherData.city}</h2>
              <ul>
                <li className="date">{weatherData.time}</li>
                <li>
                  Humidity: <strong>{weatherData.humidity}</strong> Wind:{" "}
                  <strong>{Math.round(weatherData.wind * 3.6)} km/h</strong>
                </li>
              </ul>
            </div>

            <div className="temperatureUnit">
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
