import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#e9cbfe' }} variant="light" expand="lg">
      <Navbar.Brand href="#home" style={{ color: '#4976fb' }}>femi·nin·o</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" style={{ color: '#4976fb' }}>Home</Nav.Link>
          <Nav.Link href="#blog" style={{ color: '#4976fb' }}>Blog</Nav.Link>
          <Nav.Link href="#institucional" style={{ color: '#4976fb' }}>Institucional</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;