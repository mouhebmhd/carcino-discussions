import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { House, People, Globe, CameraVideo } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useEffect,useState } from "react";

function NavbarN() {
  const role=localStorage.role;
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
    <House className="fs-4" />
    Home
  </Nav.Link>
  <Nav.Link as={Link} to="/community" className="d-flex flex-column align-items-center">
    <People className="fs-4"/>
    Communautés 
  </Nav.Link>
  <Nav.Link as={Link} to="/network" className="d-flex flex-column align-items-center">
    <Globe className="fs-4" />
    Network
  </Nav.Link>
  {role!="membre" &&
  <Nav.Link as={Link} to="/utilisateurs" className="d-flex flex-column align-items-center">
   <FaUsers className="fs-4"></FaUsers>
    Utilisateurs
  </Nav.Link>
  }
  {role=="Admin" && 
  <Nav.Link as={Link} to="/moderateurs" className="d-flex flex-column align-items-center">
   <FaUsersCog className="fs-4"></FaUsersCog>
    Modérateurs
  </Nav.Link>}
  <Nav.Link as={Link} to="/notifications" className="d-flex flex-column align-items-center">
  <FaBell className="fs-4"></FaBell>
    Notifications
  </Nav.Link>
  <Nav.Link as={Link} to="/profile" className="d-flex flex-column align-items-center">
  <CgProfile className="fs-4"></CgProfile>
    Mon Profil
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