import React from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  return (
    <div className="weatherForecast">
      {props.forecastData && props.forecastData.slice(1, 5).map((day, index) => <ForecastDay day={day} key={index} />)}
    </div>
  );
};

export default WeatherForecast;
