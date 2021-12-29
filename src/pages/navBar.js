import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navBar.css";
import { IoIosLogIn } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const navBar = () => {
  return (
    <Navbar className="color-nav" variant="dark" expand="lg">
      <Navbar.Brand className="color-nav">Dashboard-Exchanger</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/profile">
            <FaUserCircle size={30} />
          </Nav.Link>
          <Nav.Link href="/">
            <IoIosLogIn size={30} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navBar;
