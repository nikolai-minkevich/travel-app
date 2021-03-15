import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header = props => {
  const { lang = 0, value = '', home = true, func: { installerLang }} = props;
  const search = home ? props.func.search : () => {};
  const languages = [ "English", "Русский", "Français" ];

  return (
      <header className={s.header}>
        <Link to="/">
          <p className={s.text}>Travel-APP</p>
        </Link>
        { home ? <input className={s.input} value={value} onChange={e => search(e)} type="text" placeholder="Осуществи мечту! Начни с поиска!" /> : null }
        <select className={s.select} onChange={e => installerLang(e)} value={lang}>
          { languages.map( (item, index) => <option value={index} key={index}>{item}</option> ) }
        </select>
      </header>
  )
}

export default Header;

