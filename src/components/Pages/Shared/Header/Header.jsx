import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">The Chef"s Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to='/login'><Button variant="info">Login</Button></Link>
          </Nav>
          <Nav>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;