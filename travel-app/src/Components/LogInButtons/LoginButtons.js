import React from "react";
import s from "./style.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className={s.authButton} onClick={() => loginWithRedirect()}>
      {props.language === "ru" ? "Авторизоваться" : props.language === "en" ? "Log in" : "Connexion"}
    </button>
  );
};
const LogoutButton = (props) => {
  const { logout } = useAuth0();

  return (
    <button className={s.authButton} onClick={() => logout({ returnTo: "http://localhost:3000/home" })}>
      {props.language === "ru" ? "Выйти" : props.language === "en" ? "Log out" : "Se déconnecter"}
    </button>
  );
};
const LoginButtons = (props) => {
  const { user, isAuthenticated } = useAuth0();
  if (user) {
    localStorage.setItem("travelApp43_UserEmail", user.email);
  }
  return <>{isAuthenticated ? <LogoutButton language={props.language} /> : <LoginButton language={props.language} />}</>;
};
export default LoginButtons;
