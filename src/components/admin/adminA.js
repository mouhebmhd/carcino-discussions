import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, Row, Col, Nav, Tab, Card, Button, Table, 
  Modal, Form, Badge, ListGroup, Alert
} from 'react-bootstrap';
import { 
  PeopleFill, LayoutTextWindowReverse, TagsFill, 
  PersonPlusFill, TrashFill, PencilSquare, PlusCircleFill, 
  PersonBadgeFill, ListUl, HouseFill
} from 'react-bootstrap-icons';

function AdminDashboard() {
  // États pour les données
  const [moderateurs, setModerateurs] = useState([
    { id: 1, nom: 'Jean Dupont', email: 'jean.dupont@example.com', dateCreation: '01/01/2025', statut: 'Actif' },
    { id: 2, nom: 'Marie Martin', email: 'marie.martin@example.com', dateCreation: '15/02/2025', statut: 'Actif' },
    { id: 3, nom: 'Paul Bernard', email: 'paul.bernard@example.com', dateCreation: '10/03/2025', statut: 'Inactif' }
  ]);

  const [communautes, setCommunautes] = useState([
    { id: 1, nom: 'Programmation', description: 'Discussions sur la programmation', membres: 120, dateCreation: '05/01/2025' },
    { id: 2, nom: 'Design UX/UI', description: 'Partage autour du design d\'interface', membres: 85, dateCreation: '20/01/2025' },
    { id: 3, nom: 'Intelligence Artificielle', description: 'Discussions sur l\'IA et le ML', membres: 210, dateCreation: '15/02/2025' }
  ]);

  const [permissions, setPermissions] = useState([
    { id: 1, nom: 'Gestion des utilisateurs', description: 'Permet de gérer les utilisateurs standards', niveau: 'Administrateur' },
    { id: 2, nom: 'Modération de contenu', description: 'Permet de modérer le contenu publié', niveau: 'Modérateur' },
    { id: 3, nom: 'Gestion des communautés', description: 'Permet de créer et gérer des communautés', niveau: 'Administrateur' }
  ]);

  // États pour les modals
  const [showModerateur, setShowModerateur] = useState(false);
  const [showCommunaute, setShowCommunaute] = useState(false);
  const [showPermission, setShowPermission] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' ou 'edit'
  const [currentItem, setCurrentItem] = useState(null);

  // Fonctions pour gérer les modérateurs
  const handleAddModerateur = () => {
    setModalMode('add');
    setCurrentItem(null);
    setShowModerateur(true);
  };

  const handleEditModerateur = (moderateur) => {
    setModalMode('edit');
    setCurrentItem(moderateur);
    setShowModerateur(true);
  };

  const handleDeleteModerateur = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce modérateur?')) {
      setModerateurs(moderateurs.filter(mod => mod.id !== id));
    }
  };

  const handleSaveModerateur = (event) => {
    event.preventDefault();
    const form = event.target;
    const newModerateur = {
      nom: form.nom.value,
      email: form.email.value,
      statut: form.statut.value,
      dateCreation: new Date().toLocaleDateString('fr-FR')
    };

    if (modalMode === 'add') {
      setModerateurs([...moderateurs, { ...newModerateur, id: moderateurs.length + 1 }]);
    } else {
      setModerateurs(moderateurs.map(mod => 
        mod.id === currentItem.id ? { ...mod, ...newModerateur } : mod
      ));
    }
    setShowModerateur(false);
  };

  // Fonctions pour gérer les communautés
  const handleAddCommunaute = () => {
    setModalMode('add');
    setCurrentItem(null);
    setShowCommunaute(true);
  };

  const handleEditCommunaute = (communaute) => {
    setModalMode('edit');
    setCurrentItem(communaute);
    setShowCommunaute(true);
  };

  const handleDeleteCommunaute = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette communauté?')) {
      setCommunautes(communautes.filter(com => com.id !== id));
    }
  };

  const handleSaveCommunaute = (event) => {
    event.preventDefault();
    const form = event.target;
    const newCommunaute = {
      nom: form.nom.value,
      description: form.description.value,
      membres: modalMode === 'add' ? 0 : currentItem.membres,
      dateCreation: new Date().toLocaleDateString('fr-FR')
    };

    if (modalMode === 'add') {
      setCommunautes([...communautes, { ...newCommunaute, id: communautes.length + 1 }]);
    } else {
      setCommunautes(communautes.map(com => 
        com.id === currentItem.id ? { ...com, ...newCommunaute } : com
      ));
    }
    setShowCommunaute(false);
  };

  // Fonctions pour gérer les permissions
  const handleAddPermission = () => {
    setModalMode('add');
    setCurrentItem(null);
    setShowPermission(true);
  };

  const handleEditPermission = (permission) => {
    setModalMode('edit');
    setCurrentItem(permission);
    setShowPermission(true);
  };

  const handleDeletePermission = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette permission?')) {
      setPermissions(permissions.filter(perm => perm.id !== id));
    }
  };

  const handleSavePermission = (event) => {
    event.preventDefault();
    const form = event.target;
    const newPermission = {
      nom: form.nom.value,
      description: form.description.value,
      niveau: form.niveau.value
    };

    if (modalMode === 'add') {
      setPermissions([...permissions, { ...newPermission, id: permissions.length + 1 }]);
    } else {
      setPermissions(permissions.map(perm => 
        perm.id === currentItem.id ? { ...perm, ...newPermission } : perm
      ));
    }
    setShowPermission(false);
  };

  // Statistiques pour le tableau de bord
  const stats = {
    totalModerateurs: moderateurs.length,
    moderateursActifs: moderateurs.filter(mod => mod.statut === 'Actif').length,
    totalCommunautes: communautes.length,
    totalMembres: communautes.reduce((total, com) => total + com.membres, 0),
    totalPermissions: permissions.length
  };

  return (
    <Container fluid className="p-0">
      {/* Barre de navigation supérieure */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Panneau d'Administration</a>
          <div className="d-flex">
            <span className="navbar-text me-3">
              <PersonBadgeFill className="me-2" />
              Connecté en tant qu'Administrateur
            </span>
            <Button variant="outline-light" size="sm">
              Se déconnecter
            </Button>
          </div>
        </div>
      </nav>

      <Container>
        {/* Interface principale avec onglets */}
        <Tab.Container id="admin-tabs" defaultActiveKey="dashboard">
          <Row>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Header className="bg-light">Navigation</Card.Header>
                <Card.Body className="p-0">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="dashboard" className="d-flex align-items-center">
                        <LayoutTextWindowReverse className="me-2" /> Tableau de bord
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="moderateurs" className="d-flex align-items-center">
                        <PeopleFill className="me-2" /> Gérer les modérateurs
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="communautes" className="d-flex align-items-center">
                        <HouseFill className="me-2" /> Gérer les communautés
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="permissions" className="d-flex align-items-center">
                        <TagsFill className="me-2" /> Gérer les permissions
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9}>
              <Tab.Content>
                {/* Tableau de bord */}
                <Tab.Pane eventKey="dashboard">
                  <Card className="mb-4">
                    <Card.Header className="bg-light">
                      <h4 className="mb-0">Tableau de bord</h4>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card className="text-center mb-3 border-primary">
                            <Card.Body>
                              <h3>{stats.totalModerateurs}</h3>
                              <p className="mb-0">Modérateurs</p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={4}>
                          <Card className="text-center mb-3 border-success">
                            <Card.Body>
                              <h3>{stats.totalCommunautes}</h3>
                              <p className="mb-0">Communautés</p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={4}>
                          <Card className="text-center mb-3 border-info">
                            <Card.Body>
                              <h3>{stats.totalMembres}</h3>
                              <p className="mb-0">Membres au total</p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>

                      <h5 className="mt-4">Activité récente</h5>
                      <ListGroup>
                        <ListGroup.Item>Nouvelle communauté "Intelligence Artificielle" créée (15/02/2025)</ListGroup.Item>
                        <ListGroup.Item>Nouveau modérateur Paul Bernard ajouté (10/03/2025)</ListGroup.Item>
                        <ListGroup.Item>Permission "Modération de contenu" modifiée (05/03/2025)</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Gestion des modérateurs */}
                <Tab.Pane eventKey="moderateurs">
                  <Card className="mb-4">
                    <Card.Header className="bg-light d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">Gérer les modérateurs</h4>
                      <Button variant="success" size="sm" onClick={handleAddModerateur}>
                        <PlusCircleFill className="me-1" /> Ajouter un modérateur
                      </Button>
                    </Card.Header>
                    <Card.Body>
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Date de création</th>
                            <th>Statut</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {moderateurs.map((moderateur) => (
                            <tr key={moderateur.id}>
                              <td>{moderateur.id}</td>
                              <td>{moderateur.nom}</td>
                              <td>{moderateur.email}</td>
                              <td>{moderateur.dateCreation}</td>
                              <td>
                                <Badge bg={moderateur.statut === 'Actif' ? 'success' : 'danger'}>
                                  {moderateur.statut}
                                </Badge>
                              </td>
                              <td>
                                <Button 
                                  variant="outline-primary" 
                                  size="sm" 
                                  className="me-2"
                                  onClick={() => handleEditModerateur(moderateur)}
                                >
                                  <PencilSquare />
                                </Button>
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => handleDeleteModerateur(moderateur.id)}
                                >
                                  <TrashFill />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Gestion des communautés */}
                <Tab.Pane eventKey="communautes">
                  <Card className="mb-4">
                    <Card.Header className="bg-light d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">Gérer les communautés</h4>
                      <Button variant="success" size="sm" onClick={handleAddCommunaute}>
                        <PlusCircleFill className="me-1" /> Ajouter une communauté
                      </Button>
                    </Card.Header>
                    <Card.Body>
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Membres</th>
                            <th>Date de création</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {communautes.map((communaute) => (
                            <tr key={communaute.id}>
                              <td>{communaute.id}</td>
                              <td>{communaute.nom}</td>
                              <td>{communaute.description}</td>
                              <td>{communaute.membres}</td>
                              <td>{communaute.dateCreation}</td>
                              <td>
                                <Button 
                                  variant="outline-primary" 
                                  size="sm" 
                                  className="me-2"
                                  onClick={() => handleEditCommunaute(communaute)}
                                >
                                  <PencilSquare />
                                </Button>
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => handleDeleteCommunaute(communaute.id)}
                                >
                                  <TrashFill />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Gestion des permissions */}
                <Tab.Pane eventKey="permissions">
                  <Card className="mb-4">
                    <Card.Header className="bg-light d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">Gérer les permissions</h4>
                      <Button variant="success" size="sm" onClick={handleAddPermission}>
                        <PlusCircleFill className="me-1" /> Ajouter une permission
                      </Button>
                    </Card.Header>
                    <Card.Body>
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Niveau</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {permissions.map((permission) => (
                            <tr key={permission.id}>
                              <td>{permission.id}</td>
                              <td>{permission.nom}</td>
                              <td>{permission.description}</td>
                              <td>
                                <Badge bg={permission.niveau === 'Administrateur' ? 'danger' : 'info'}>
                                  {permission.niveau}
                                </Badge>
                              </td>
                              <td>
                                <Button 
                                  variant="outline-primary" 
                                  size="sm" 
                                  className="me-2"
                                  onClick={() => handleEditPermission(permission)}
                                >
                                  <PencilSquare />
                                </Button>
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => handleDeletePermission(permission.id)}
                                >
                                  <TrashFill />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      {/* Modal pour ajouter/modifier un modérateur */}
      <Modal show={showModerateur} onHide={() => setShowModerateur(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === 'add' ? 'Ajouter un nouveau modérateur' : 'Modifier le modérateur'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveModerateur}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control 
                type="text" 
                name="nom" 
                required 
                defaultValue={currentItem?.nom || ''}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                required 
                defaultValue={currentItem?.email || ''}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Statut</Form.Label>
              <Form.Select name="statut" defaultValue={currentItem?.statut || 'Actif'}>
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModerateur(false)}>
              Annuler
            </Button>
            <Button variant="primary" type="submit">
              {modalMode === 'add' ? 'Ajouter' : 'Enregistrer les modifications'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Modal pour ajouter/modifier une communauté */}
      <Modal show={showCommunaute} onHide={() => setShowCommunaute(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === 'add' ? 'Ajouter une nouvelle communauté' : 'Modifier la communauté'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveCommunaute}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control 
                type="text" 
                name="nom" 
                required 
                defaultValue={currentItem?.nom || ''}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="description" 
                required 
                defaultValue={currentItem?.description || ''}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowCommunaute(false)}>
              Annuler
            </Button>
            <Button variant="primary" type="submit">
              {modalMode === 'add' ? 'Ajouter' : 'Enregistrer les modifications'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Modal pour ajouter/modifier une permission */}
      <Modal show={showPermission} onHide={() => setShowPermission(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === 'add' ? 'Ajouter une nouvelle permission' : 'Modifier la permission'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSavePermission}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control 
                type="text" 
                name="nom" 
                required 
                defaultValue={currentItem?.nom || ''}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="description" 
                required 
                defaultValue={currentItem?.description || ''}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Niveau requis</Form.Label>
              <Form.Select name="niveau" defaultValue={currentItem?.niveau || 'Modérateur'}>
                <option value="Modérateur">Modérateur</option>
                <option value="Administrateur">Administrateur</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPermission(false)}>
              Annuler
            </Button>
            <Button variant="primary" type="submit">
              {modalMode === 'add' ? 'Ajouter' : 'Enregistrer les modifications'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default AdminDashboard;