import React from "react";
import s from "./style.module.scss";

class CountryVideo extends React.PureComponent {
  render() {
    const { countryVideoUrl } = this.props;
    return (
      <iframe
      className ={s.video}
        src={countryVideoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    );
  }
}

export default CountryVideo;
