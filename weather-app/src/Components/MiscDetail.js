import React from "react";
import humidity from "../assets/icons/humidity.png";
import temperature from "../assets/icons/temp.png";
import tempMin from "../assets/icons/temp-min.png";
import tempMax from "../assets/icons/temp-max.png";
import windSpeed from "../assets/icons/wind-speed.png";
import windDirection from "../assets/icons/wind-direction.png";

export default function MiscDetail({ main, wind, flexStyle }) {
  const miscStyle = {
    width: "100%",
    height: "100px",
    ...flexStyle,
    gap: "25px",
    marginTop: "100px",
  };

  const innerDivStyle = {
    ...flexStyle,
    flexDirection: "column",
    borderRadius: "5px",
  };

  const spanStyle = {
    fontSize: "10px",
  };

  const imgStyle = {
    backgroundColor: "white",
    borderRadius: "5px",
    width: "35px",
    height: "35px",
    padding: "5px",
  };

  const h3Style = {
    textAlign: "center",
    letterSpacing: "0.5px",
    color: "white",
    opacity: "0.7",
  };

  function temp(val) {
    return val - 273.15;
  }

  const degreesToCompass = (deg) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.floor(deg / 22.5 + 0.5) % 16;
    return directions[index];
  };

  function mpsToKmh(val) {
    return val * 3.6;
  }

  return (
    <div style={miscStyle}>
      <div style={innerDivStyle}>
        <img src={temperature} style={imgStyle} />
        <h3 style={h3Style}>
          {temp(main.temp).toFixed(1) + " "}
          <span style={spanStyle}>°C</span>
        </h3>
      </div>
      <div style={innerDivStyle}>
        <img src={tempMin} style={imgStyle} />
        <h3 style={h3Style}>
          {temp(main.temp_min).toFixed(1) + " "}
          <span style={spanStyle}>°C</span>
        </h3>
      </div>
      <div style={innerDivStyle}>
        <img src={tempMax} style={imgStyle} />
        <h3 style={h3Style}>
          {temp(main.temp_max).toFixed(1) + " "}
          <span style={spanStyle}>°C</span>
        </h3>
      </div>
      <div style={innerDivStyle}>
        <img src={humidity} style={imgStyle} />
        <h3 style={h3Style}>
          {main.humidity + " "}
          <span style={spanStyle}>%</span>
        </h3>
      </div>
      <div style={innerDivStyle}>
        <img src={windSpeed} style={imgStyle} />
        <h3 style={h3Style}>
          {mpsToKmh(wind.speed).toFixed(1) + " "}
          <span style={spanStyle}>KMH</span>
        </h3>
      </div>
      <div style={innerDivStyle}>
        <img src={windDirection} style={imgStyle} />
        <h3 style={h3Style}>{degreesToCompass(wind.deg)}</h3>
      </div>
    </div>
  );
}
