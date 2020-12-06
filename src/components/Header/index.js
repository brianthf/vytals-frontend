import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Header() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Vytals</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="justify-content-end">
            <Nav.Link>
              <Link to="/login">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">
                Register
              </Link>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}