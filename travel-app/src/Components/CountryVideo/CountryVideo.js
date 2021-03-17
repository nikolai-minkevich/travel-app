import React from "react";
import "./CountryVideo.module.scss";

class CountryVideo extends React.PureComponent {
  render() {
    const { countryVideoUrl } = this.props;
    return (
      <>
        <iframe
          src={countryVideoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
        />
      </>
    );
  }
}

export default CountryVideo;
