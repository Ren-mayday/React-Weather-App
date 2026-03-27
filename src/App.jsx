import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./components/SearchForm";
import WeatherForecast from "./components/WeatherForecast";
import axios from "axios";

import "./App.css";

function App(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const apiURL = `https://api.shecodes.io/weather/v1/current?query=Barcelona&key=b0cf77c269o45df36f49efa3fdta040a&units=metric`;
    axios.get(apiURL).then(handleWeatherData);
  }, []);

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

    const forecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${response.data.city}&key=b0cf77c269o45df36f49efa3fdta040a&units=metric`;
    axios.get(forecastURL).then((forecastResponse) => {
      setForecastData(forecastResponse.data.daily);
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
        <WeatherForecast forecastData={forecastData} />
      </div>
    </main>
  );
}

export default App;
