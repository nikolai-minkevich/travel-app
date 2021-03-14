import React from "react";
import HomePage from "./Pages/HomePage/index.js";
import CountryPage from "./Pages/CountryPage/index.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LanguageSwitcher } from "./Utils/LanguageSwitcher.js";

class App extends React.PureComponent {
  constructor() {
    super();
    this.languageSwitcher = new LanguageSwitcher();
    console.log(this.languageSwitcher);
    this.state = {
      language: this.languageSwitcher.get(),
    };
  }

  render() {
    const { history } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route history={history} path="/home" render={(props) => <HomePage {...props} language={this.state.language} />} />
          <Route
            history={history}
            path="/country/:codeISO2"
            render={(props) => <CountryPage {...props} language={this.state.language} />}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
