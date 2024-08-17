import React from 'react';
import './MyNavbar.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../assets/logo.png';


const MyNavbar = () => {
  return (
    <Navbar  className='p-0' expand="md">
      <Container>
        <Navbar.Brand id='logo' href="#home">
          <img src={logo} title='Foodera' alt="FOODERA" />
        </Navbar.Brand>
        <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Explore foods</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id='navItemNumber'>010 536 977</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar