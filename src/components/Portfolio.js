import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="row" id="topRow">
            <Col xs={12} sm={4}>
              <img alt="screen shot" src="/jungle.png" />
            </Col>

            <Col className="desc" align="left" xs={12} smOffset={1} sm={7}>
              <h3>King of the Jungle</h3>
              <h5>
                A twist on the classic board game Carcassone; a multi-player,
                multi-room game where players place tiles to build and claim
                regions for points. Game includes a complex scoring mechanism
                and features include a group chat, animations, and
                three-dimensional graphics. Built on a team of four as a
                capstone project for the Grace Hopper Program at Fullstack
                Academy.
              </h5>
              <h5>
                Built with Javascript, Three.js, React, Redux, Express, Node,
                HTML, CSS and Socket.io
              </h5>
              <h5>
                <a
                  href="https://king-of-the-jungle.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play
                </a>
              </h5>

              <h5>
                <a
                  href="https://www.youtube.com/watch?v=D9fL8foYt7Y&index=18&list=PLx0iOsdUOUmmMdgcWgABSEBRkSWAG3aNP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it presented
                </a>
              </h5>
              <h5>
                <a
                  href="https://github.com/Carcassonne-Capstone/Carcassonne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </h5>
            </Col>
          </Row>

          <Row className="row">
            <Col xs={12} sm={4}>
              <img alt="screen shot" src="/Baby-Blocks.png" />
            </Col>

            <Col className="desc" align="left" xs={12} smOffset={1} sm={7}>
              <h3>Baby Blocks</h3>
              <h5>
                An app allowing users to play a simple lottery game managed by a
                smart contract on the Ethereum blockchain. Built as an
                individual hackathon project over four days.
              </h5>
              <h5>
                Built with Javascript, React, and Solidity using MetaMask and
                the Ethereum network
              </h5>

              <h5>
                <a
                  href="https://www.youtube.com/watch?v=ivVpBQ12NuA&t=0s&list=PLx0iOsdUOUmnmSuYRD63kcCzzr5hpr3cW&index=31"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it presented
                </a>
              </h5>
              <h5>
                <a
                  href="https://github.com/micaela825/Baby-Block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </h5>
            </Col>
          </Row>

          <Row className="row">
            <Col id="secondCol" xs={12} sm={4}>
              <img alt="screen shot" src="/Bakery.png" />
            </Col>

            <Col className="desc" align="left" xs={12} smOffset={1} sm={7}>
              <h3>Hopper Bakery</h3>
              <h5>
                An e-commerce site where users can shop for bunny-themed baked
                goods as a new or logged-in user, and check out through Stripe
                on a persistent cart. Built on a team of four in one week as
                part of the Grace Hopper Program.
              </h5>
              <h5>
                Built with Javascript, React, Redux, Passport, PostgreSQL,
                Sequelize, Express, OAuth, Stripe and deployed with Heroku
              </h5>
              <h5>
                <a
                  href="https://hopperbakery.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop
                </a>
              </h5>

              <h5>
                <a
                  href="https://github.com/GraceShopperBakery/Bakery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </h5>
            </Col>
          </Row>

          <Row id="fourthRow">
            <Col align="center" xs={12} sm={12}>
              <h3>works in progress</h3>
            </Col>
          </Row>
          <Row className="row">
            <Col xs={12} sm={4}>
              <img alt="screen shot" src="/Trivia.png" />
            </Col>
            <Col className="desc" align="left" xs={12} smOffset={1} sm={7}>
              <h3>Trivia</h3>
              <h5>
                A page where users can play trivia, search for books, and get
                inspiration via a fortune cookie or Ron Swanson.
              </h5>
              <h5>
                Built with Javascript, React, Redux, Node, and Express. This app
                also uses{" "}
                <a
                  href="https://openlibrary.org/dev/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Open Library API
                </a>
                , the{" "}
                <a
                  href="http://jservice.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jService Trivia API,
                </a>{" "}
                the{" "}
                <a
                  href="https://api.adviceslip.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Advice Slip API
                </a>{" "}
                and a{" "}
                <a
                  href="https://github.com/jamesseanwright/ron-swanson-quotes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ron Swanson quote generator
                </a>{" "}
                API.{" "}
              </h5>
              <h5>
                <a
                  href="https://github.com/micaela825/trivia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </h5>
            </Col>
          </Row>
          <Row className="row">
            <Col xs={12} sm={4}>
              <img alt="screen shot" src="/oherrons.png" />
            </Col>
            <Col className="desc" align="left" xs={12} smOffset={1} sm={7}>
              <h3>The O'Herrons</h3>
              <h5>
                A personal site for family history. Visitors can browse family
                albums, read family stories, and later will be able to log in
                and upload their own photos and memories.
              </h5>
              <h5>
                Built with Javascript, React, HTML and CSS using React-Bootstrap
              </h5>
              <h5>
                <a
                  href="https://github.com/micaela825/oherrons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </h5>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
