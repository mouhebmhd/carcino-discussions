import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { House, People, Globe, CameraVideo } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function NavbarN() {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand href="#" className="d-flex align-items-center">
        <img src="/logoo.png" alt="Tradstor Logo" width="40" height="40" className="me-2" />
        <span className="fw-bold text-danger">Carcino-disc</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-center">
      <Nav className="mx-auto">
  <Nav.Link as={Link} to="/Home" className="d-flex flex-column align-items-center">
    <House size={20} />
    Home
  </Nav.Link>
  <Nav.Link as={Link} to="/community" className="d-flex flex-column align-items-center">
    <People size={20} />
    Community
  </Nav.Link>
  <Nav.Link as={Link} to="/network" className="d-flex flex-column align-items-center">
    <Globe size={20} />
    Network
  </Nav.Link>
  <Nav.Link as={Link} to="/VideoPage" className="d-flex flex-column align-items-center">
    <CameraVideo size={20} />
    Video
  </Nav.Link>
</Nav>
      </Navbar.Collapse>
      <Form className="d-flex">
        <FormControl type="search" placeholder="Search" className="me-2" />
      </Form>
    </Navbar>
  );
}

export default NavbarN;