import React from 'react';
import s from './Footer.module.scss';

import git from '../../git.jpg';
import rs from '../../logo.png';

const Footer = () => (
    <footer className={s.footer}>
        <p className={s.text}>React Course · RS School 2021Q1 · Task 2</p>

        <div className={s.iconGit}>
            <a href="https://github.com/nikolai-minkevich" target="_blank">
                <img src={git} alt="git hub" />
                <p>Nikolai</p>
            </a>
            <a href="https://github.com/VaseninaNastya" target="_blank">
                <img src={git} alt="git hub" />
                <p>Nastya</p>
            </a>
            <a href="https://github.com/AV-63-dev" target="_blank">
                <img src={git} alt="git hub" />
                <p>Anatoliy</p>
            </a>
        </div>

        <a href="https://community-z.com/events/react-rsschool-2021/" target="_blank">
            <img src={rs} alt="rs school" />
        </a>
    </footer>
);

export default Footer;