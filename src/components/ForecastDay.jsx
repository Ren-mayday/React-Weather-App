import React from "react";
import "./ForecastDay.css";

const ForecastDay = (props) => {
  return (
    <div className="weatherForecastPreview">
      <div className="forecastDay">
        {new Date(props.day.time * 1000).toLocaleDateString("en-US", { weekday: "short" })}
      </div>

      <img src={props.day.condition.icon_url} alt={props.day.condition.description} />

      <div className="forecast-temp-block">
        <span className="forecast-temp-label">max</span>
        <span className="forecastTemperatureMax">{Math.round(props.day.temperature.maximum)}°</span>
      </div>

      <div className="forecast-temp-block">
        <span className="forecast-temp-label">min</span>
        <span className="forecastTemperatureMin">{Math.round(props.day.temperature.minimum)}°</span>
      </div>
    </div>
  );
};

export default ForecastDay;
