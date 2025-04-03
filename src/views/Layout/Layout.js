import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import NavbarN from "../../components/Navbar";
import SuggestionsS from "../../components/Suggestions";
import SidebarS from "../../components/Sidebar";

function Layout() {
  return (
    <div>
      <NavbarN />
      <Container fluid>
        <Row>
          <Col md={2} className="bg-light vh-100">
            <SidebarS />
          </Col>
          <Col md={8} className="p-3">
            <Outlet />
          </Col>
          <Col md={2} className="bg-light vh-100">
            <SuggestionsS />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;