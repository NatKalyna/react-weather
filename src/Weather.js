import React from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp} ℃`);
  }

  let apiKey = "c00b6e3e1cc217d87916a8b794f7ca77";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Rings
      height="80"
      width="80"
      color="#4fa94d"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
}
