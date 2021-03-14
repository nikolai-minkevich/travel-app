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
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async function () {
    const countries = await this.travelAppAPI.getCountries();
    this.setState({
      countries: countries,
    });
  };

  render() {
    const { countries } = this.state;
    return (
      <React.Fragment>
        <Header />
        <CountriesList>
          {countries.length === 0 ? "Data is loading..." : null}
          {countries.map((country, index) => {
            return (
              <Link to={"/country/" + country.codeISO2}>
                <CountryCard
                  imageURL={country.coverURL}
                  name={country.name}
                  capital={country.capital}
                  key={index}
                  codeISO2={country.codeISO2}
                />
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
