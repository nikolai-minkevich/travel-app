import React from "react";
import { Link, withRouter } from "react-router-dom";
import s from "./Header.module.scss";

import LoginButtons from "../LogInButtons/index.js";

class Header extends React.PureComponent {
  constructor() {
    super();
    this.languages = [
      { title: "English", code: "en" },
      { title: "Русский", code: "ru" },
      { title: "Français", code: "fr" },
    ];
  }

  componentDidMount() {
    this.value = this.props.value;

    const { location } = this.props;
    if (location.pathname.substring(0, 5) === "/home") {
      this.inputRef.focus();
    }
  }


  render() {
    const { switchLanguage, func } = this.props;
    let { language = "en" /*, searchText = "" */ } = this.props;
    const { location } = this.props;
    return (
      <header className={s.header}>
        <Link to="/home">
          <p className={s.text}>Travel-APP</p>
        </Link>
        {location.pathname.substring(0, 5) === "/home" ? (
          <input
            className={s.input}
            onChange={func.search}
            type="text"
            placeholder={
              language === "ru"
                ? "Осуществи мечту! Начни с поиска!"
                : language === "en"
                ? "Make your dream come true! Start by searching!"
                : "Réalise tes rêves! Commencez par chercher!"
            }
            ref={(inputRef) => (this.inputRef = inputRef)}
          />
        ) : null}
        <div className={s.buttons}>
          <LoginButtons language={language}/>
          <select className={s.select} onChange={switchLanguage} value={language}>
            {this.languages.map((item, index) => (
              <option value={item.code} key={index}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
