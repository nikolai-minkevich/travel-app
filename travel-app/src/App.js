import Test from "./Components/Test";
import "./App.css";
import CountryCard from "./Components/CountryCard";
import CountriesList from "./Components/CountriesList";
import TravelAppAPI from "./Utils/TravelAppAPI";
import React from "react";

import Footer from './Components/Footer/Footer';

class App extends React.PureComponent {
  constructor() {
    super();
    this.travelAppAPI = new TravelAppAPI();
    this.loadData();
  }

  state = {
    countries: [],
  };

  loadData = async function () {
    const countries = await this.travelAppAPI.getCountries();
    /* После того, как бекенд начнет отдавать данные только по одному языку,
     * name и capital будет принимать информацию в виде
     * name={country.capital}
     */
    // let countriesList = (

    // );

    this.setState(
      {
        countries: countries,
      },
      console.log(this.state)
    );
  };
  render() {
    const { countries } = this.state;
    return (

      <React.Fragment>
        <div className="App">
          <Test />
          <CountriesList>
          {countries.map((country) => {
            return <CountryCard imageURL={country.coverURL} name={country.info[0].name} capital={country.info[0].capital} />;
          }) || "Data is loading..."}
        </CountriesList>
        </div>
        <Footer/>
      </React.Fragment>

    );
  }
}

export default App;
