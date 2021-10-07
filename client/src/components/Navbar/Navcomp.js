import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import React from 'react'

export default class navBarComp extends React.Component {
    render() {
        return (
            <div>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
  <Container>
    
  <Navbar.Brand href="#home"><b>My News</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Navbar class="navbar navbar-default navbar-fixed-top">
    </Navbar>
    <Nav className="me-auto">
      
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.cnn.com/sport">Sports</NavDropdown.Item>
        <NavDropdown.Item href="https://www.cnn.com/technology">Technology</NavDropdown.Item>
        <NavDropdown.Item href="https://www.cnn.com/politics">Politics</NavDropdown.Item>
        <NavDropdown.Item href="https://www.cnn.com/Economy">Economy</NavDropdown.Item>
        <NavDropdown.Item href="https://www.cnn.com/style">Fashion</NavDropdown.Item> 
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}


