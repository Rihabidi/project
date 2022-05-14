import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown,Button, FormControl } from 'react-bootstrap'
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <div  >
      
        
        <Navbar style={{height:"110px",backgroundColor:"lightblue"}} >
  <Container fluid>
  <img
        src={logo}
        width="220"
        height="220"
        className="d-inline-block align-top"
        alt="logo"
      />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as ={Link} to={"/"}>Home</Nav.Link>
        <NavDropdown title="Products" id="navbarScrollingDropdown">
          <NavDropdown.Item as ={Link} to={"/electronic"}>Electronics</NavDropdown.Item>
          <NavDropdown.Item  as ={Link} to={"/fashion"}>clothes</NavDropdown.Item>
          <NavDropdown.Item >Beauty Products</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as ={Link} to={"/contact"}>contact</Nav.Link>
        <Nav.Link  >About</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}

export default Navigation