import React, { Component } from "react";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import Form from "./Form";
class App extends Component {
  state = {
    value: "",
    err: false
  };
  handelInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handelInputChange}></Form>
        <i className=" wi wi-day-sunny"></i>
      </div>
    );
  }
}

export default App;
