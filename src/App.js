import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./view/HomePage";
import TestPage from "./view/TestPage";
import ResultPage from "./view/ResultPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/test" component={TestPage} />
      <Route path="/result" component={ResultPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
