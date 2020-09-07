import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../Home";
import Players from "../Players";
import Teams from "../Teams";
import NavBar from "../NavBar";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="">
          <Players />
        </Route>

        <Route path="/teams">
          <Teams />
        </Route>
      </div>
    </Router>
  );
}

App.propTypes = {};
