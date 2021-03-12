import React from "react";
import s from "./style.module.scss";

class CountryCard extends React.PureComponent {
  render() {
    const { imageURL, name, capital } = this.props;
    console.log(imageURL, name, capital);
    // const bac = `backgroundImage: url(${imageURL});`
    return (
      <div className={s.countryCard}>
        <div className={s.countryCard_image} style={{backgroundImage : `url(${imageURL})`}} ></div>
        
        <h2>{name}</h2>
        <h3>{capital}</h3>
      </div>
    );
  }
}

export default CountryCard;
