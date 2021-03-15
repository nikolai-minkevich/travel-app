import React from "react";
import Header from "../../Components/Header/Header.js";
import TravelAppAPI from "../../Utils/TravelAppAPI";
import Footer from "../../Components/Footer/Footer";
import CountryInfoBlock from "../../Components/CountryInfoBlock/CountryInfoBlock";
import s from "./CountryPage.module.scss";
import CountryVideo from "../../Components/CountryVideo/CountryVideo";
import { withRouter } from "react-router";
import CountryWidget from "../../Components/CountryWidget/CountryWidget";
import MapComponent from "../../Components/MapComponent/MapComponent.js";

class CountryPage extends React.Component {
  constructor() {
    super();
    this.travelAppAPI = new TravelAppAPI();
  }

  state = {
    countryData: "",
    language: "en",
  };
  componentDidMount() {
    const { codeISO2 } = this.props.match.params;
    const { language } = this.props;
    this.loadData(codeISO2, language);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.language !== prevState.language) {
      return {
        language: nextProps.language,
      };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    const { codeISO2 } = this.props.match.params;
    if (prevState.language !== this.state.language) {
      this.loadData(codeISO2, this.state.language);
    }
  }
  loadData = async function (codeISO2, lang = "en") {
    const countryData = await this.travelAppAPI.getCountry(codeISO2, lang);
    this.setState({
      countryData: countryData,
    });
  };
  render() {
    const { countryData, language } = this.state;
    const { videoURL, capital, timeZone, capitalCoordinates, codeISO2 /* attractions*/ } = countryData;
    console.log(capitalCoordinates);
    const { switchLanguage } = this.props;

    return (
      <React.Fragment>
        <Header switchLanguage={switchLanguage} language={language} />
        {countryData.length === 0 ? "Data is loading..." : null}
        <div className={s.countryPage_container}>
          {countryData ? <CountryInfoBlock countryData={countryData} /> : null}
          {capital && timeZone ? <CountryWidget language={language} timezone={timeZone} countryCapital={capital} /> : null}
          {videoURL ? <CountryVideo countryVideoUrl={videoURL} /> : null}
          {capitalCoordinates ? (
            <MapComponent capitalCoordinates={[capitalCoordinates.lat, capitalCoordinates.lon]} language={language} codeISO2={codeISO2} />
          ) : null}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(CountryPage);
