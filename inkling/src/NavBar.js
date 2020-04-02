import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar
        className="Nav"
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand id="brand" href="#home">
          Inkling
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#code">Code Examples</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/mpeglerg/Inkling">
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
