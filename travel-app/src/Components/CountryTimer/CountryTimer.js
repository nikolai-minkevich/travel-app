import React from "react";
import s from "./style.module.scss";

class CountryTimer extends React.PureComponent {
  state = {
    day: "",
    month: "",
    hour: "",
    min: "",
    sec: "",
  };

  showTime = () => {
    const { timezone, language } = this.props;
    let locale = language;
    let date = new Date();
    let today = new Date(date.toLocaleString("en", { timeZone: timezone }));
    let monthStr = today.toLocaleString(locale, { month: "long" });
    let dayStr = today.toLocaleString(locale, { weekday: "long" });
    let hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
    this.setState({
      day: dayStr,
      month: monthStr,
      hour: hour,
      min: min,
      sec: sec,
    });
  };
  addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }
  componentDidMount() {
    setInterval(this.showTime, 1000);
  }
  render() {
    const { day, month, hour, min, sec } = this.state;
    return (
      <>
        <span className={s.CountryTimer}>{day}</span>
        <span className={s.CountryTimer}>{month}</span>
        <span className={s.CountryTimer}>
          {hour}
          <span>:</span>
          {this.addZero(min)}
          <span>:</span>
          {this.addZero(sec)}
        </span>
        
      </>
    );
  }
}

export default CountryTimer;
