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
        <div className="App">
          <CountriesList>
            {countries.length === 0 ? "Data is loading..." : null}
            {countries.map((country, index) => {
              return <CountryCard imageURL={country.coverURL} name={country.name} capital={country.capital} key={index} />;
            })}
          </CountriesList>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
