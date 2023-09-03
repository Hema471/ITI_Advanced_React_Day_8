import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const myFAv = useSelector(state => state.favorites)
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link  className="navbar-brand" to="home">Home</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/MyFav" className="nav-link">
                MyFav - {myFAv.length}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
