import React from "react";
import ReactTooltip from "react-tooltip";
import s from "./Rating.module.scss";

const Rating = (props) => {
  const { rating, cursor, voters } = props;
  const style = {
    width: `${rating * 21.8}px`,
  };

  return (
    <>
      <div className={s.box} style={cursor} data-tip={voters}>
        <div className={s.starsTransparent}></div>
        <p>{rating}</p>
        <div className={s.starsFill} style={style}></div>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
};

export default Rating;
