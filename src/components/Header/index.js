import React from "react";
import { Navbar, Nav } from "react-bootstrap";


export default function Header() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Parlay</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="justify-content-end">
            <Nav.Link eventKey="link1">
              Logout
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}