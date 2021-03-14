import React from "react";
import s from "./style.module.scss";
import WeatherAPI from "../../Utils/WeatherAPI.js"

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
    //
    const weatherData = await this.weatherAPI.getWeather(this.props.countryCapital);
    console.log("sskskkk",weatherData);
    //
    /* После того, как бекенд начнет отдавать данные только по одному языку,
     * name и capital будет принимать информацию в виде
     * name={country.capital}
     */

    this.setState({
      weatherData: weatherData,
    });
  };




  render() {
    const { countryCapital } = this.props;
    console.log("countryCapital",countryCapital);
    console.log("this.state.weatherData", this.state.weatherData);
    console.log("props", this.props);
    return (
      <div className={s.countryWidget_container}>

      </div>
    );
  }
}

export default CountryWidget;
