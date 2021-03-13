import React from 'react';
import s from './Header.module.scss';

const Header = (props) => {
    // const { lang = 0, value = '', home = true, func: { search, installerLang  }} = props;
    // ниже две строчки для проверки при работе раскоментируем весь пропс (строчка выше) а ниже три строки сотрем
    const { lang = 2, value = 'ghb', home = true } = props;
    const installerLang = event => console.log(event.target.value);
    const search = event => console.log(event.target.value);

    const language = ['English', 'Русский', 'Français'];
    // lang должен иметь значение 0, 1, 2 в соответствии с language
    
    return (
        <header className={s.header}>
            <p className={s.text}>Travel-APP</p>

            {home ? <input className={s.input} value={value} onChange={search} type="text"
                placeholder="Осуществи мечту! Начни с поиска!"/> : null}

            <select className={s.select} onChange={installerLang} value={Number(lang)}>
                { language.map((item, index) => <option value={index} key={index}>{item}</option>) }
            </select>        
        </header>
    )    
};

export default Header;