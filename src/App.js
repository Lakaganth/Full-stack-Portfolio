import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderNav from "./components/header/HeaderNav";

import LandingPage from "./Pages/landingPage/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav></HeaderNav>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
