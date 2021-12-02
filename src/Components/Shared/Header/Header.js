import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            
            <Navbar className='fixed-top' expand="lg" style={{background:'#0F2C67'}}>
  <Container>
    <Navbar.Brand style={{color:'#fff',fontSize:'30px',fontWeight:'400'}}href="#home">Shahrin</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav " />

   
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link}  style={{color:'#fff'}}to="/home">Home</Nav.Link>
        <Nav.Link  style={{color:'#fff'}} href="#skills">Skills</Nav.Link>
        <Nav.Link  style={{color:'#fff'}} href="#review">Review</Nav.Link>
        <Nav.Link  style={{color:'#fff'}} href="#about">About me</Nav.Link>
        <Nav.Link  style={{color:'#fff'}} href="#projects">Project</Nav.Link>
        <Nav.Link  style={{color:'#fff'}} href="#contact">Contact</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
         
        </div>
    );
};

export default Header;