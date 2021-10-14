import img from "../assets/img.png";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import React from "react";

/*navigation component*/
export default function navbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <img src={img} alt="" style={{ height: "30px" }} />
      <Navbar.Brand href="#home"> INV-APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className="nav-link" >Home</Nav.Link>
          <Nav.Link href="/manajemen-inv" className="nav-link" >Add Data</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="primary">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
