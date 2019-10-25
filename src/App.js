import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import HeaderNav from "./components/header/HeaderNav";
import LogoParallax from "./components/logoParallax/LogoMobileParallax";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav></HeaderNav>
        <Switch>
          <LogoParallax></LogoParallax>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
