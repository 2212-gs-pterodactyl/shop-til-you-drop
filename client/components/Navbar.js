import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store";
import NavCart from "./NavCart";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  return (
    <Navbar sticky="top" id="navbar" className="shadow-sm mb-3">
      {isLoggedIn ? (
        <Container>
          <Navbar.Brand>
            <h2>Shop Till You Drop</h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/home" as={NavLink}>
              Dashboard
            </Nav.Link>
            <Button href="#" onClick={() => dispatch(logout())}>
              Logout
            </Button>
            <NavCart />
          </Nav>
        </Container>
      ) : (
        <Container>
          <Navbar.Brand>Shop Till You Drop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/login" as={NavLink}>
              Login
            </Nav.Link>
            <Nav.Link to="/signup" as={NavLink}>
              Sign Up
            </Nav.Link>
          </Nav>
          <NavCart />
        </Container>
      )}
    </Navbar>
  );
};

export default NavBar;
