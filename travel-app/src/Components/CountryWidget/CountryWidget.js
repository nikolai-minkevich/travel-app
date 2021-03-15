import React from "react";
import s from "./style.module.scss";
import WeatherAPI from "../../Utils/WeatherAPI.js";
import './owfont-regular.css'
class CountryWidget extends React.PureComponent {
  constructor() {
    super();
    this.weatherAPI = new WeatherAPI();
  }
  state = {
    weatherData: "",
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = async function () {
    const weatherData = await this.weatherAPI.getWeather(
      this.props.countryCapital
    );
    this.setState({
      weatherData: weatherData,
    });
  };
  render() {
    const { weatherData } = this.state;
    let temp,description,icon= "";
    if (weatherData) {
      temp = `${Math.floor(weatherData.main.temp)}°C`
      description= weatherData.weather[0].description
      icon =`owf-${weatherData.weather[0].id} owf`
    }
    return (
      <div className={s.countryWidget_container}>
        <span>temperature: {temp}</span>
        <span>description: {description}</span>
        <i className ={icon}/>
      </div>
    );
  }
}

export default CountryWidget;
