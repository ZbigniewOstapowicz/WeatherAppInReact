import React from "react";
import Info from "./Info";

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err,
    minTemp,
    maxTemp,
    description,
    icon,
    country
  } = props.weather;
  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h1>
          {city.toUpperCase()}, {country}
        </h1>
        <i className={`wi ${icon}`}></i>
        <p>{Math.round(temp)}&#176;C</p>
        <span>{Math.round(minTemp)}&#176;C</span>
        <span>{Math.round(maxTemp)}&#176;C</span>

        <p>{description}</p>
        <details>
          <summary>More info</summary>
          <Info icon={"wi-time-3"} text={date}></Info>
          <Info icon={"wi-barometer"} text={`${pressure}  hpa`}></Info>
          <Info icon={"wi-windy"} text={`${wind} m/s`}></Info>

          <Info icon={"wi-sunrise"} text={sunriseTime}></Info>

          <Info icon={"wi-sunset"} text={sunsetTime}></Info>
        </details>
      </>
    );
  }
  return <div className="result">{err ? `Not Found ${city}` : content}</div>;
};

export default Result;
