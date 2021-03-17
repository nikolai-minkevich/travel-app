import React from "react";
import s from "./style.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton =  () => {
  const {
    loginWithRedirect
  } = useAuth0();
//let getAccessTokenSilentlyrr =  getAccessTokenSilently()
  return <button className={s.authButton} onClick={() => loginWithRedirect()}>Log In</button>;
};


const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button className={s.authButton} onClick={() => logout({ returnTo:"http://localhost:3000/home" })}>
      Log Out
    </button>
  );
};

const LoginButtons =()=> {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if(user){
      localStorage.setItem("travelApp43_UserEmail", user.email)
    }
    return (
      <>
        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      </>
    );
  
}
export default LoginButtons;

