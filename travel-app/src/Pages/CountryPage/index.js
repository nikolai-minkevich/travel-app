import React from "react";
import Header from "../../Components/Header/Header.js";

import TravelAppAPI from "../../Utils/TravelAppAPI";
import Footer from "../../Components/Footer/Footer";

import CountryInfoBlock from "../../Components/CountryInfoBlock/CountryInfoBlock";
import s from "./CountryPage.module.scss";
import CountryVideo from "../../Components/CountryVideo/CountryVideo";
import { withRouter } from "react-router";
import CountryWidget from "../../Components/CountryWidget/CountryWidget";

class CountryPage extends React.Component {
  constructor() {
    super();
    this.travelAppAPI = new TravelAppAPI();
  }

  state = {
    countryData: "",
  };
  componentDidMount() {
    const { codeISO2 } = this.props.match.params;
    const { language } = this.props;
    this.loadData(codeISO2, language);
  }
  loadData = async function (codeISO2, lang = "en") {
    const countryData = await this.travelAppAPI.getCountry(codeISO2, lang);
    console.log("countryData", countryData);
    this.setState({
      countryData: countryData,
    });
  };
  render() {
    const { countryData } = this.state;
    const { videoURL, capital, capitalCoordinates, attractions } = countryData;

    const { switchLanguage, language } = this.props;

    return (
      <React.Fragment>
        <Header switchLanguage={switchLanguage} language={language} />
        {countryData.length === 0 ? "Data is loading..." : null}
        <div className={s.countryPage_container}>
          <CountryInfoBlock countryData={countryData} />
          {capital ? <CountryWidget countryCapital={capital} /> : null}

          <CountryVideo countryVideoUrl={videoURL} />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(CountryPage);
