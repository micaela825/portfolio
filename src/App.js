import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div id="body">
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
