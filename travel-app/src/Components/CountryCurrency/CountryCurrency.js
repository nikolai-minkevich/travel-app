import React from "react";
import s from "./style.module.scss";
import CurrencyAPI from "../../Utils/CurrencyAPI.js";
class CountryCurrency extends React.PureComponent {
  constructor() {
    super();
    this.currencyAPI = new CurrencyAPI();
  }
  state = {
    currencyData: "",
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = async function () {
    const { currency } = this.props;
    const currencyData = await this.currencyAPI.getCurrency(currency);
    console.log("weatherData",currencyData.conversion_rates);
    this.setState({
      currencyData: currencyData.conversion_rates
    });
  };
  render() {
    const {currencyData} = this.state
    return( <div className={s.currency_container}>
    { currencyData.EUR && currencyData.USD && currencyData.RUB? <span>&euro; {currencyData.EUR.toFixed(2)}; &#36; {currencyData.USD.toFixed(2)}; &#8381; {currencyData.RUB.toFixed(2)}</span> : null}
    </div>);
  }
}

export default CountryCurrency;
