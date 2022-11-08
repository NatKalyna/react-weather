import React, { useState } from "react";
import axios from "axios";
// import { Rings } from "react-loader-spinner";

function Weather() {
  let [weather, setWeather] = useState("");
  let [city, setCity] = useState("");

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "c00b6e3e1cc217d87916a8b794f7ca77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeather() {
    if (weather) {
      return (
        <div>
          {SearchForm}
          <div>
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}℃</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
              <li className="icon">
                <img
                  src={`http:
//openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                />
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return SearchForm;
    }
  }

  let SearchForm = (
    <form onClick={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your city.."
        autoFocus={true}
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  return <div>{getWeather()}</div>;
}

export default Weather;
