import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../Components/Header/HeaderNew";
import Footer from "../../Components/Footer/Footer";

import GetLanguage from "../../Utils/GetLanguage";
import getData from "../../Utils/getData";
import searchCountry from "../../Utils/searchCountry";

class HomePage extends Component {
  constructor() {
    super();

    this.getLang = new GetLanguage();

    this.state = {
      data: [],
      dataSearch: [],
      lang: this.getLang.get(),
      valueInput: '',
    };

    this.getListCountries(this.getLang.get());
    this.search = this.search.bind(this);
    this.installerLang = this.installerLang.bind(this);
  }

  async getListCountries( lang = 0 ) {
    const data = await getData(lang);
    this.setState({ data: data , dataSearch: data });
  }

  search(event) {
    const valueInput = event.target.value;
    const data = this.state.data.concat();
    const dataSearch = searchCountry(data, valueInput);
    this.setState({ dataSearch, valueInput });
  }

  installerLang(event) {
    const lang = event.target.value;
    const valueInput = '';
    this.getLang.set( lang );
    this.setState({ lang, valueInput });
    this.getListCountries(this.getLang.get());
  }

  render() {
    const cards = this.state.dataSearch;

    return (
      <React.Fragment>
        <Header lang={this.state.lang} value={this.state.valueInput} home={true} func={{ search: this.search, installerLang: this.installerLang }} />
        
        {/* section временное решение для отображения карт */}
        <section style={{width: "100%", height: "80vh"}}>
          { cards ? cards.map(item => (
            <Link to={`/country/${item.codeISO2}`} key={item.codeISO2}>
              <div style={{textAlign: "center", margin: "20px 0"}}>
                <p>{item.name}</p>
                <p>{item.capital}</p>
              </div>
            </Link>
          )) : null }
        </section>
        
        <Footer/>
      </React.Fragment>
    )
  }
}


export default HomePage