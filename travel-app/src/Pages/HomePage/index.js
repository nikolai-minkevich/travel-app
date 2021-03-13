import React from "react";
import Header from "../../Components/Header/Header.js"
import CountryCard from "../../Components/CountryCard";
import CountriesList from "../../Components/CountriesList";
import TravelAppAPI from "../../Utils/TravelAppAPI";


import Footer from "../../Components/Footer/Footer";




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
        //
        const countryData = await this.travelAppAPI.getCountry("US","ru");
        console.log(countryData);
        //
        const countries = await this.travelAppAPI.getCountries();
        /* После того, как бекенд начнет отдавать данные только по одному языку,
         * name и capital будет принимать информацию в виде
         * name={country.capital}
         */
    
        this.setState({
          countries: countries,
        });
      };
      render() {
        const { countries } = this.state;
        return (
          <React.Fragment>
            <div className="App">
              <Header />
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
export default HomePage;