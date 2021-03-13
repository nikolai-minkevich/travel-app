import Test from "./Components/Test";
import "./App.css";
import CountryCard from "./Components/CountryCard";
import CountriesList from "./Components/CountriesList";
import TravelAppAPI from "./Utils/TravelAppAPI";
import React from "react";

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

class App extends React.PureComponent {
  constructor() {
    super();
    this.travelAppAPI = new TravelAppAPI();
    this.loadData();
  }

  

  state = {
    countriesList: null,
  };

  loadData = async function () {
    const countries = await this.travelAppAPI.getCountries();
    /* После того, как бекенд начнет отдавать данные только по одному языку,
     * name и capital будет принимать информацию в виде
     * name={country.capital}
     */
    let countriesList = (
      <CountriesList>
        {countries.map((country) => {
          return <CountryCard imageURL={country.coverURL} name={country.info[0].name} capital={country.info[0].capital} />;
        })}
      </CountriesList>
    );

    this.setState(
      {
        countriesList: countriesList,
      },
      console.log(this.state)
    );
  };
  render() {
    const { countriesList } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <Test />
          {countriesList || "Data is loading..."}
          <Test />
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
