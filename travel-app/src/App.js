import logo from "./logo.svg";
import Test from "./Components/Test";
import "./App.css";
import CountryCard from "./Components/CountryCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React</a>
          <Test />
          <CountryCard imageURL="https://gpxies.ru/team43/usa/main.jpg" name="United States of America" capital="Washington" />
        
      </header>
    </div>
  );
}

export default App;
