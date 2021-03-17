import React from "react";
import s from "./style.module.scss";

class CountriesList extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <div className={s.countriesList}>{children}</div>;
  }
}

export default CountriesList;
