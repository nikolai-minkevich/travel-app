import React from "react";
import HomePage from "./Pages/HomePage/index.js";
import CountryPage from "./Pages/CountryPage/index.js";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { LanguageSwitcher } from "./Utils/LanguageSwitcher.js";

import { Auth0Provider } from "@auth0/auth0-react";
import AuthPage from "./Pages/AuthPage/index.js";

class App extends React.PureComponent {
  constructor() {
    super();
    this.languageSwitcher = new LanguageSwitcher();
    this.state = {
      language: this.languageSwitcher.get(),
    };
  }

  switchLanguage = (event) => {
    this.languageSwitcher.set(event.target.value);
    this.setState({
      language: this.languageSwitcher.get(),
    });
  };

  render() {
    const { history } = this.props;

    const { language } = this.state;
    const onRedirectCallback = (appState) => {
      history.push(appState?.returnTo || "/home");
    };
    return (
      <Auth0Provider 
 
      domain= {process.env.REACT_APP_AUTH0_DOMAIN}
      clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH0_CALLBACK_URL}
      onRedirectCallback={onRedirectCallback}
      history={history}>
        <Switch>
          <Route
            history={history}
            path="/home"
            render={(props) => (
              <HomePage
                {...props}
                language={language}
                switchLanguage={this.switchLanguage}
              />
            )}
          />
          <Route
            history={history}
            path="/authPage"
            render={(props) => (
              <AuthPage
                {...props}
                language={language}
                switchLanguage={this.switchLanguage}
              />
            )}
          />

          <Route
            history={history}
            path="/home"
            render={(props) => (
              <HomePage
                {...props}
                language={language}
                switchLanguage={this.switchLanguage}
              />
            )}
          />
          <Route
            history={history}
            path="/country/:codeISO2"
            render={(props) => (
              <CountryPage
                {...props}
                language={language}
                switchLanguage={this.switchLanguage}
              />
            )}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </Auth0Provider>
    );
  }
}

export default withRouter(App);
