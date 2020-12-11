import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useAuth } from "../../context";
import "./style.css";

export default function Header() {
  const { state, logout } = useAuth();
  const history = useHistory();
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand>Vytals</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav fill>
          {state.isAuthenticated ? (
            <Nav.Item className="px-3">
              <Button
                variant="link"
                onClick={() => {
                  logout();
                  history.push("/");
                }}
              >
                Logout
              </Button>
            </Nav.Item>
          ) : (
            <>
              <Button variant="link">
                Login
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
