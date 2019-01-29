import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a id="brand" href="/">
                m.o
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/portfolio">
                portfolio
              </NavItem>
              <NavItem
                eventKey={2}
                href="https://www.github.com/micaela825/"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </NavItem>
              <NavItem
                eventKey={3}
                href="https://www.linkedin.com/in/micaela-oherron/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
