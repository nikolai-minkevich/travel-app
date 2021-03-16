import React from "react";

class CountryTimer extends React.PureComponent {
  state = {
    day: "",
    date: "",
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
      datestr = today.getDate(),
      min = today.getMinutes(),
      sec = today.getSeconds();
    this.setState({
      day: dayStr,
      date: datestr,
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
    this.interval = setInterval(this.showTime, 1000);
  }
  render() {
    const { day, date, month, hour, min, sec } = this.state;
    return (
      <>
        <span>{day}</span>
        <span>
          {date} {month}
        </span>
        <span>
          {hour}
          <span>:</span>
          {this.addZero(min)}
          <span>:</span>
          {this.addZero(sec)}
        </span>
      </>
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default CountryTimer;
