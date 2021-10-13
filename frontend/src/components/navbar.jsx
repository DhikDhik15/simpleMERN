import img from "../assets/img.png";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import React from "react";

/*navigation component*/
export default function navbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <img src={img} alt="" style={{ height: "30px" }} />
      <Navbar.Brand href="#home"> INV-APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
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
    </Navbar>
  );
}

// function navbar (){
//     return (
//         <div>
//             <nav className = "navbar navbar-expand bg-dark">
//                 <div className = "container">
//                     <ul className = "nav">
//                         <li>
//                             <link to="/" className = "nav-link">
//                                 Beranda</link>
//                         </li>
//                         <li>
//                             <link to="/manajemen-buku" className = "nav-link">
//                                 Manajemen Buku</link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }
