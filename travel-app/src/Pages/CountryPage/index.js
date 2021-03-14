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
    this.setState({
      countryData: countryData,
    });
  };
  render() {
    const { countryData } = this.state;

    const { switchLanguage, language } = this.props;
    let countryVideoUrl = "",
      countryCapital = "";
    if (countryData.info) {
      countryVideoUrl = countryData.info.videoURL;
      countryCapital = countryData.capital;
    }

    return (
      <React.Fragment>
        <Header switchLanguage={switchLanguage} language={language} />
        {countryData.length === 0 ? "Data is loading..." : null}
        <div className={s.countryPage_container}>
          <CountryInfoBlock countryData={countryData} />
          {countryCapital ? <CountryWidget countryCapital={countryCapital} /> : null}

          <CountryVideo countryVideoUrl={countryVideoUrl} />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(CountryPage);
