import React from "react";
import s from "./style.module.scss";
import WeatherAPI from "../../Utils/WeatherAPI.js";
import CountryTimer from "../CountryTimer/CountryTimer.js";
import CountryCurrency from "../CountryCurrency/CountryCurrency.js"
import "./owfont-regular.css";
class CountryWidget extends React.PureComponent {
  constructor() {
    super();
    this.weatherAPI = new WeatherAPI();
  }
  state = {
    weatherData: "",
    lang: ""
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.language !== prevState.language) {
      return {
        language: nextProps.language,
      };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      this.loadData();
    }
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = async function () {
    const {countryCapital} = this.props
    const { language} = this.state
    const weatherData = await this.weatherAPI.getWeather(
      countryCapital, language
    );
    this.setState({
      weatherData: weatherData
    });
  };
  render() {
    const { language, timezone, currency } = this.props;
    const { weatherData } = this.state;
    let temp,
      description,
      icon = "";
    if (weatherData) {
      temp = `${Math.floor(weatherData.main.temp)}°C`;
      description = weatherData.weather[0].description;
      icon = `owf-${weatherData.weather[0].id} owf`;

    }
    return (
      <div className={s.countryWidget_container}>
        <span> {temp}</span>
        <span> {description}</span>
        <i className={icon} />
        <CountryTimer language={language} timezone={timezone} />
        <CountryCurrency currency = {currency}/>
      </div>
    );
  }
}

export default CountryWidget;
