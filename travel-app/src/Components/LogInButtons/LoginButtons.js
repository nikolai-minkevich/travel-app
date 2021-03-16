import React from "react";
import s from "./style.module.scss";
import { withAuth } from "../../Components/AuthComponent/index.js";


class LoginButtons extends React.PureComponent {
  render() {
    const { authorize, logOut, isAutorized } = this.props;
    return (
      <>
        {isAutorized ? (
          <button className={s.authButton} onClick={logOut}>
            Выйти
          </button>
        ) : (
          <button className={s.authButton} onClick={authorize}>
            Авторизоваться
          </button>
        )}
      </>
    );
  }
}

export default withAuth(LoginButtons);
