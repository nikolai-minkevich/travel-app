import React from "react";
import s from "./style.module.scss";

class CountryInfoBlock extends React.PureComponent {
  render() {
    const { countryData } = this.props;
    console.log(
      "imageURL",
      countryData.coverURL,
      countryData.name,
      countryData.capital
    );
    console.log(" countryData", countryData);
    return (
      <>
        <div className={s.countryInfo_container}>
        <div
            className={s.countryInfo_image}
            style={{ backgroundImage: `url(${countryData.coverURL})` }}
          ></div>
          <div className={s.countryInfo_content}>
            <h2>{countryData.name}</h2>
            <h3>{countryData.capital}</h3>
            <div className={s.countryInfo_description}>
              {countryData.description}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CountryInfoBlock;
