import React from "react";
import Template from "./components/Template";
import "./App.css";
import Header from "./components/Header";
import Mainbody from "./components/Mainbody";
import Formheader from "./components/Formheader";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {
  BrowserRouter as Router,
  Switch, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/form">
            <Formheader />
          </Route>
          <Route exact path="/">
            <Header />
            <Template />
            <Mainbody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
