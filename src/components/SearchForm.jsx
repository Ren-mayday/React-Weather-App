//! input ciudad y el botón

import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b0cf77c269o45df36f49efa3fdta040a&units=metric`;
    axios
      .get(apiURL)
      .then(props.handleWeatherData)
      .catch((error) => alert(error));
    setSearchedCity(city);
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type of city..." value={city} onChange={(e) => setCity(e.target.value)} />
      <input type="submit" className="btn-search" value="Search" />
    </form>
  );
};

export default SearchForm;
