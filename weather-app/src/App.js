import React, { useState, useEffect, createContext } from "react";
import Header from "./Components/Header";
import axios from "axios";
import WeatherDetailBox from "./Components/WeatherDetailBox";

export const InputContext = createContext();
export const WeatherContext = createContext();

export default function App() {
  const [cityName, setCityName] = useState("Chennai");
  const [weatherDetail, setWeatherDetail] = useState({});
  let APIKEY = "7898ab9eda43705f06fd505f2b1c0a34";
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`
      )
      .then((res) => {
        setWeatherDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [cityName]);

  const handleCityName = (val) => {
    setCityName(val);
    console.log(weatherDetail);
  };

  return (
    <div>
      <InputContext.Provider value={handleCityName}>
        <Header />
      </InputContext.Provider>
      <WeatherContext.Provider value={weatherDetail}>
        <WeatherDetailBox />
      </WeatherContext.Provider>
    </div>
  );
}
