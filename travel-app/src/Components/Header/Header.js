import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

class Header extends React.PureComponent {
  constructor() {
    super();
    this.language = [
      { title: "English", code: "en" },
      { title: "Русский", code: "ru" },
      { title: "Français", code: "fr" },
    ];
  }

  componentDidMount() {
    this.value = this.props.value;
  }

  installerLang = (event) => console.log(event.target.value);
  search = (event) => {
    this.value += event.target.value;
  };

  // lang должен иметь значение 0, 1, 2 в соответствии с language
  render() {
    // const { lang = 0, value = '', home = true, func: { search, installerLang  }} = props;
    // ниже две строчки для проверки при работе раскоментируем весь пропс (строчка выше) а ниже три строки сотрем
    const { lang = 2, value = "", home = true } = this.props;

    return (
      <header className={s.header}>
        <Link to="/home">
          <p className={s.text}>Travel-APP</p>
        </Link>

        {home ? (
          <input className={s.input} value={value} onChange={this.search} type="text" placeholder="Осуществи мечту! Начни с поиска!" />
        ) : null}

        <select className={s.select} onChange={this.installerLang} value={Number(lang)}>
          {this.language.map((item, index) => (
            <option value={item.code} key={index}>
              {item.title}
            </option>
          ))}
        </select>
      </header>
    );
  }
}

export default Header;
