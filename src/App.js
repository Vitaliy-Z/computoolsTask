import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./view/HomePage";
import TestPage from "./view/TestPage";
import ResultPage from "./view/ResultPage";

// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/test" component={TestPage} />
        <Route path="/result" component={ResultPage} />
        <Redirect to="/" />
      </Switch>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* 
    <div className="App">
      <header className="App-header">
        <Counter /> 
         <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> 
      </header>
    </div>
  */}
    </>
  );
}

export default App;
