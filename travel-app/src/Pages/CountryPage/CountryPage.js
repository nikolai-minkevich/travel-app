import React, { Component } from "react";

import Header from "../../Components/Header/HeaderNew";
import Footer from "../../Components/Footer/Footer";

import GetLanguage from "../../Utils/GetLanguage";
import getData from "../../Utils/getData";

class CountryPage extends Component {
  constructor(props) {
    super(props);

    this.countryURL = props.match.params.id;
    this.getLang = new GetLanguage();

    this.state = {
      data: {},
      lang: this.getLang.get(),
    };

    this.getCountry( this.getLang.get(), this.countryURL);
    this.installerLang = this.installerLang.bind(this);
  }

  async getCountry( lang, codeISO2 ) {
    const data = await getData( lang, codeISO2 );
    this.setState({ data });
  }

  installerLang(event) {
    const lang = event.target.value;
    this.getLang.set( lang );
    this.setState({ lang });
    this.getCountry( this.getLang.get(), this.countryURL);
  }

  render() {
    const card = this.state.data;

    return (
      <React.Fragment>
        <Header lang={this.state.lang} home={false} func={{ installerLang: this.installerLang }} />
        
        {/* section временное решение для отображения карт */}
        <section style={{width: "100%", height: "80vh"}}>
          { card ? <p>{ card.description }</p> : null }
        </section>

        <Footer/>
      </React.Fragment>
    )
  }
}

export default CountryPage