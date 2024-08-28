import React, { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../App";
import MiscDetail from "./MiscDetail";

export default function WeatherDetailBox() {
  const weatherDetail = useContext(WeatherContext);
  const [isLoading, setLoading] = useState(true);

  const flexStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const loadingStyle = {
    width: "100%",
    height: "100%",
    ...flexStyle,
  };

  const h2Style = {
    color: "rgba(255, 255, 255, 0.8)",
    letterSpacing: "0.5px",
  };

  const mainStyle = {
    ...loadingStyle,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  const cardStyle = {
    ...flexStyle,
    flexDirection: "column",
    backgroundImage:
      "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
    borderRadius: "5px",
    width: "500px",
    height: "600px",
    marginTop: "50px",
  };

  useEffect(() => {
    if (
      weatherDetail &&
      weatherDetail.main &&
      weatherDetail.name &&
      weatherDetail.weather &&
      weatherDetail.wind &&
      weatherDetail.weather.length > 0
    ) {
      setLoading(false);
    }
  }, [weatherDetail]);

  if (isLoading) {
    return (
      <div style={loadingStyle}>
        <p>Loading or no weather data available.</p>
      </div>
    );
  }

  return (
    <>
      <main style={mainStyle}>
        <div style={cardStyle}>
          <h2 style={h2Style}>{weatherDetail.name}</h2>
          <figure>
            <img
              src={`http://openweathermap.org/img/wn/${weatherDetail.weather[0].icon}@2x.png`}
            />
            <figcaption
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "0.8px",
                opacity: "0.7",
              }}
            >
              {weatherDetail.weather[0].main}
            </figcaption>
          </figure>
          <div
            style={{
              ...h2Style,
              fontSize: "17px",
              letterSpacing: "1px",
            }}
          >
            {"Description"}
            &nbsp;&nbsp;:&nbsp;&nbsp;
            <span style={{ textTransform: "capitalize", letterSpacing: "1px" }}>
              {weatherDetail.weather[0].description}
            </span>
          </div>
          <MiscDetail
            main={weatherDetail.main}
            wind={weatherDetail.wind}
            flexStyle={flexStyle}
          />
        </div>
      </main>
    </>
  );
}
