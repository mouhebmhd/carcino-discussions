import React from "react"; import { Container, Row, Col, Card, Button, ListGroup, Navbar, Nav } from "react-bootstrap";

function DashboardModerateur() { return ( <Container fluid> <Navbar bg="dark" variant="dark" expand="lg" className="mb-4"> <Navbar.Brand href="#">Panneau du Modérateur</Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" /> <Navbar.Collapse id="basic-navbar-nav"> <Nav className="me-auto"> <Nav.Link href="#profil">Gérer son profil</Nav.Link> <Nav.Link href="#communautes">Gérer les communautés</Nav.Link> <Nav.Link href="#notifications">Gérer ses notifications</Nav.Link> </Nav> </Navbar.Collapse> </Navbar>

<Row className="mb-4 text-center">
    <Col>
      <Card bg="info" text="white">
        <Card.Body>
          <Card.Title>3</Card.Title>
          <Card.Text>Communautés</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card bg="success" text="white">
        <Card.Body>
          <Card.Title>415</Card.Title>
          <Card.Text>Membres au total</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col md={4}>
      <Card id="profil" className="mb-3">
        <Card.Header>Gérer son profil</Card.Header>
        <Card.Body>
          <Button variant="primary">Modifier le profil</Button>
        </Card.Body>
      </Card>

      <Card id="notifications" className="mb-3">
        <Card.Header>Gérer ses notifications</Card.Header>
        <Card.Body>
          <Button variant="warning">Configurer les notifications</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={8}>
      <Card id="communautes">
        <Card.Header>Gérer les communautés</Card.Header>
        <Card.Body>
          <ListGroup className="mb-3">
            <ListGroup.Item>Approuver une demande d'utilisateur</ListGroup.Item>
            <ListGroup.Item>Consulter la liste des utilisateurs</ListGroup.Item>
            <ListGroup.Item>Avertir un utilisateur</ListGroup.Item>
            <ListGroup.Item>Supprimer un utilisateur</ListGroup.Item>
          </ListGroup>
          <ListGroup className="mb-3">
            <ListGroup.Item>Approuver une publication</ListGroup.Item>
            <ListGroup.Item>Consulter la liste des publications</ListGroup.Item>
            <ListGroup.Item>Signaler une publication</ListGroup.Item>
            <ListGroup.Item>Supprimer une publication</ListGroup.Item>
          </ListGroup>
          <Button variant="success">Gérer la communauté</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

); }

export default DashboardModerateur;