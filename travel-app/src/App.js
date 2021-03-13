
import "./App.css";
import React from "react";
import CountryPage from "./Pages/CountryPage/index.js"
import HomePage from "./Pages/HomePage/index.js"
class App extends React.PureComponent {

  render() {
    return (
      <React.Fragment>
        <CountryPage/>
      </React.Fragment>
    );
  }
}

export default App;
