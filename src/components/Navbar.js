import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
    <Container>
				<LinkContainer to="/">
      <Navbar.Brand>
        <FaHome className="mr-2" />
        Kratin Health Solutions
      </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to="/about">
          <Nav.Link>
            <FaInfoCircle className="mr-1" />
            About
          </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
          <Nav.Link>
            <FaBriefcase className="mr-1" />
            Services
          </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
          <Nav.Link>
            <FaEnvelope className="mr-1" />
            Contact
          </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
