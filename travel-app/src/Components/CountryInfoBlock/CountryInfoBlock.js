import React from "react";
import s from "./style.module.scss";

class CountryInfoBlock extends React.PureComponent {
  render() {
    const { imageURL, name, capital } = this.props;
    return (
      <div className={s.countryCard}>
        <div className={s.countryCard_image} style={{ backgroundImage: `url(${imageURL})` }}></div>

        <h2>{name}</h2>
        <h3>{capital}</h3>
      </div>
    );
  }
}

export default CountryInfoBlock;
