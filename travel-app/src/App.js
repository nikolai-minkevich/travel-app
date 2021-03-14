import "./App.css";
import React from "react";
import HomePage from "./Pages/HomePage/index.js";
import CountryPage from "./Pages/CountryPage/index.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends React.PureComponent {
  render() {
    const { history } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route history={history} path="/home" component={HomePage} />
          <Route history={history} path="/country/:codeISO2" component={CountryPage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
