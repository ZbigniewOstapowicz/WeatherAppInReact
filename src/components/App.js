import React, { Component } from "react";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import Form from "./Form";
import Result from './Result'

const keyToAPI = "a67178c4d192b130e85780b3051d411d";
class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    minTemp: "",
    maxTemp: "",
    pressure: "",
    wind: "",
    description: "",
    icon: "",
    country: "",
    err: false
  };
  weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
  handelInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handelButtonSubmit = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${keyToAPI}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState(state => ({
          err: false,
          date: time,
          country: data.sys.country,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: state.value,
          description: data.weather[0].description
        }));
        this.get_WeatherIcon(this.weatherIcon, data.weather[0].id);
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }));
      });
  };
  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handelInputChange}
          submit={this.handelButtonSubmit}
        ></Form>
        <Result weather={this.state}></Result>
      </div>
    );
  }
}

export default App;
