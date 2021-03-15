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

    // console.log("weatherData", weatherData);
    let temp,description,icon= "";

    if (weatherData) {
      temp = `${Math.floor(weatherData.main.temp)}°C`
      description= weatherData.weather[0].description
      // console.log("description",description);
      icon =`owf-${weatherData.weather[0].id} owf`
      // console.log("icon",icon);
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
