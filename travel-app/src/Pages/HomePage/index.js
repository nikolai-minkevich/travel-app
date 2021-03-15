import React from "react";
import Header from "../../Components/Header/Header.js";
import CountryCard from "../../Components/CountryCard";
import CountriesList from "../../Components/CountriesList";
import TravelAppAPI from "../../Utils/TravelAppAPI";
import searchCountry from "../../Utils/searchCountry";
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
  search = (event) => {
    //if (event.target.value) {
    const data = this.state.countries.concat();
    const dataSearch = searchCountry(data, event.target.value);
    this.setState({ countries: dataSearch });
    //}
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
      this.loadData(this.state.language);
    }
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
    const { countries, language } = this.state;
    const { switchLanguage } = this.props;
    return (
      <React.Fragment>
        <Header switchLanguage={switchLanguage} language={language} func={{ search: this.search, installerLang: this.installerLang }} />
        <CountriesList>
          {countries.length === 0 ? "Data is loading..." : null}
          {countries.map((country, index) => {
            if (country.hidden !== true) {
              return (
                <Link to={"/country/" + country.codeISO2} key={index}>
                  <CountryCard imageURL={country.coverURL} name={country.name} capital={country.capital} codeISO2={country.codeISO2} />
                </Link>
              );
            } else {
              return country;
            }
          })}
        </CountriesList>

        <Footer />
      </React.Fragment>
    );
  }
}
export default HomePage;
