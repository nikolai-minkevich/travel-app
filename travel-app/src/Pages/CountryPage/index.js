import React from "react";
import Header from "../../Components/Header/Header.js"

import TravelAppAPI from "../../Utils/TravelAppAPI";
import Footer from "../../Components/Footer/Footer";
import CountryInfoBlock from "../../Components/CountryInfoBlock/CountryInfoBlock"
import s from './CountryPage.module.scss'

class HomePage extends React.Component {
  constructor() {
    super();
    this.travelAppAPI = new TravelAppAPI();
  }

  state = {
    countryData: "",
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async function () {
    //
    const countryData = await this.travelAppAPI.getCountry("US", "ru");
    console.log("sskskkk",countryData);
    //
    /* После того, как бекенд начнет отдавать данные только по одному языку,
     * name и capital будет принимать информацию в виде
     * name={country.capital}
     */

    this.setState({
        countryData: countryData,
    });
  };
  render() {
    const { countryData } = this.state;
    return (
      <React.Fragment>
        <Header />
        {countryData.length === 0 ? "Data is loading..." : null}
        <div className={s.countryPage_container}>
        < CountryInfoBlock countryData={countryData} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default HomePage;
