import "./App.css";
import React from "react";
// import CountryPage from "./Pages/CountryPage/index.js"
import HomePage from "./Pages/HomePage/index.js";
import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";

class App extends React.PureComponent {
  render() {
    const { history } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route history={history} path="/home" component={HomePage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
