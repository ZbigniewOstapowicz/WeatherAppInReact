import React from "react";

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
  let content=null;
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
        <span>min:{minTemp}&#176;C</span>
        <span>max:{Math.round(maxTemp)}&#176;C</span>
        <p>{description}</p>
        <details>
            <summary>
                More info
            </summary>
    <h4>date: {date}</h4>
    <h4>pressure: {pressure} hpa</h4>
    <h4>wind: {wind} m/s</h4>
    <h4>sunrise: {sunriseTime}</h4>
  <h4>sunset: {sunsetTime}</h4>
        </details>
      </>
    );
  }
  return (<div className="result">
      {err ? `Not Found ${city}` : content}
      </div>
  )
}

export default Result;
