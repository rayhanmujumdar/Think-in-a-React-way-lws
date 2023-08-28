import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { convertor, toCelsius, toFahrenheit } from "../lib/convertor";
class Calculator extends React.Component {
  state = { temperature: "", scale: "" };
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convertor(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convertor(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          handleTemperature={this.handleChange}
          scale="f"
          temperature={fahrenheit}
        ></TemperatureInput>
        <TemperatureInput
          handleTemperature={this.handleChange}
          scale="c"
          temperature={celsius}
        ></TemperatureInput>
        <BoilingVerdict temperature={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
