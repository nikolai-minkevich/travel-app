import React from "react";
import Header from "../../Components/Header/Header.js";

import TravelAppAPI from "../../Utils/TravelAppAPI";
import Footer from "../../Components/Footer/Footer";
import CountryInfoBlock from "../../Components/CountryInfoBlock/CountryInfoBlock";
import s from "./CountryPage.module.scss";
import CountryVideo from "../../Components/CountryVideo/CountryVideo";
import { withRouter } from "react-router";
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

    console.log("countryData ", countryData);
    let countryVideoUrl = "";
    if (countryData) {
      countryVideoUrl = countryData.info.videoURL;
    }

    return (
      <React.Fragment>
        <Header />
        {countryData.length === 0 ? "Data is loading..." : null}
        <div className={s.countryPage_container}>
          <CountryInfoBlock countryData={countryData} />
          <CountryVideo countryVideoUrl={countryVideoUrl} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(CountryPage);
