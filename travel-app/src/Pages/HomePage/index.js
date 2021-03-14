import React from "react";
import Header from "../../Components/Header/Header.js";
import CountryCard from "../../Components/CountryCard";
import CountriesList from "../../Components/CountriesList";
import TravelAppAPI from "../../Utils/TravelAppAPI";

import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor() {
    super();
    this.travelAppAPI = new TravelAppAPI();
  }

  state = {
    countries: [],
    language: "en",
  };

  componentDidUpdate() {
    // Необходимо исправить!
    this.loadData(this.state.language);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.language !== prevState.language) {
      return {
        language: nextProps.language,
      };
    }
    return null;
  }

  componentDidMount() {
    const { language } = this.props;
    this.loadData(language);
    this.setState({
      language: language,
    });
  }

  loadData = async function (lang = "en") {
    const countries = await this.travelAppAPI.getCountries(lang);
    this.setState({
      countries: countries,
    });
  };

  render() {
    const { countries } = this.state;
    const { language } = this.state;
    const { switchLanguage } = this.props;
    return (
      <React.Fragment>
        <Header switchLanguage={switchLanguage} language={language} />
        <CountriesList>
          {countries.length === 0 ? "Data is loading..." : null}
          {countries.map((country, index) => {
            return (
              <Link to={"/country/" + country.codeISO2} key={index}>
                <CountryCard imageURL={country.coverURL} name={country.name} capital={country.capital} codeISO2={country.codeISO2} />
              </Link>
            );
          })}
        </CountriesList>

        <Footer />
      </React.Fragment>
    );
  }
}
export default HomePage;
