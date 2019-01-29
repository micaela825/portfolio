import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Col xs={12} md={6} className="homeText">
          <h1>micaela o'herron</h1>
          <h4>software engineer</h4>
          <h4>grace hopper / fullstack academy alum</h4>
          <h4>
            <span role="img" aria-label="pushpin">
              📍
            </span>
            new york
          </h4>
        </Col>
        <Col md={6} />
        <img alt="screen shot" src="/background.jpg" />
      </div>
    );
  }
}

export default Home;
