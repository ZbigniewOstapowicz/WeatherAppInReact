import React from "react";
import Info from "./Info";
import "./Result.css";

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
      <div className="result">
        <h1>
          {city.toUpperCase()}, {country}
        </h1>
        <i className={`result__main-icon wi ${icon}`}></i>
        <p className="result__main-temp">{Math.round(temp)}&#176;C</p>
        <span className="result__min-temp">{Math.round(minTemp)}&#176;C</span>
        <span className="result__max-temp">{Math.round(maxTemp)}&#176;C</span>
        <p className='result__description'>{description}</p>
        <details >
          <summary className='result__btn'>More info</summary>
          <Info icon={"wi-time-3"} text={date}></Info>
          <Info icon={"wi-barometer"} text={`${pressure}  hpa`}></Info>
          <Info icon={"wi-windy"} text={`${wind} m/s`}></Info>
          <Info icon={"wi-sunrise"} text={sunriseTime}></Info>
          <Info icon={"wi-sunset"} text={sunsetTime}></Info>
        </details>
      </div>
    );
  }
  return <div className="result">{err ? `Not Found ${city}` : content}</div>;
};

export default Result;
