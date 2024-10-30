import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState(false);

  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7b3a77a5c1a8ebaa302785b7cb6888c7`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setInfo(true);
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  if (info) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a City" onChange={updateCity} />
          <button type="submit">Search</button>
        </form>
        <ul>
          <li>Temperature: {temp}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
        </ul>
        <br />
        <a href="https://github.com/AnastasiiaRubikD/weather-web">
          Open-sourced code on GitHub
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a City" onChange={updateCity} />
          <button type="submit">Search</button>
        </form>
        <br />
        <a href="https://github.com/AnastasiiaRubikD/weather-web">
          Open-sourced code on GitHub
        </a>
      </div>
    );
  }
}
