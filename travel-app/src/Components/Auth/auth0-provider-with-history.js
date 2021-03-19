
import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {


  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || "/home");
  };

  return (
    <Auth0Provider
    domain= {process.env.REACT_APP_AUTH0_DOMAIN}
    clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={process.env.REACT_APP_AUTH0_CALLBACK_URL}
    onRedirectCallback={onRedirectCallback}
    history = {history}
    //grant_type={refresh_token}
    useRefreshTokens = {true}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithHistory;