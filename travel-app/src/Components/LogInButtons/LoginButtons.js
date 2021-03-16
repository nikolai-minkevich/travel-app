import React from "react";
import s from "./style.module.scss";
import { withAuth } from "../../Components/AuthComponent/index.js";
import { useAuth0 } from "@auth0/auth0-react";

class LoginButtons extends React.PureComponent {
  render() {
    const { authorize, logOut, isAutorized } = this.props;
    console.log("this.props>>>>>>>", this.props);
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
