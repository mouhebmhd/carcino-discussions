import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, Dropdown, Table, Pagination } from 'react-bootstrap';
import { FaTrash, FaFlag, FaEllipsisV, FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function PublicationsManager() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Données fictives pour la démonstration
  const dummyPublications = [
    { id: 1, title: "", author: "Jean Dupont", date: "2025-04-10", status: "Publié"},
  
  ];

  // Simuler le chargement des données depuis une API
  useEffect(() => {
    const fetchPublications = async () => {
      setLoading(true);
      try {
        // Simulation d'un appel API
        setTimeout(() => {
          setPublications(dummyPublications);
          setTotalPages(Math.ceil(dummyPublications.length / 5));
          setLoading(false);
        }, 500);
      } catch (err) {
        setError('Erreur lors du chargement des publications');
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  // Filtrer les publications en fonction du terme de recherche
  const filteredPublications = publications.filter(publication =>
    publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonctions pour gérer la suppression
  const handleDeleteClick = (publication) => {
    setSelectedPublication(publication);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Simulation de suppression (dans une application réelle, cela serait un appel API)
    setPublications(publications.filter(pub => pub.id !== selectedPublication.id));
    setShowDeleteModal(false);
    // Afficher un message de succès
  };

  // Fonctions pour gérer le signalement
  const handleReportClick = (publication) => {
    setSelectedPublication(publication);
    setShowReportModal(true);
  };

  const confirmReport = () => {
    // Simulation d'envoi du signalement (dans une application réelle, cela serait un appel API)
    console.log(`Publication "${selectedPublication.title}" signalée pour: ${reportReason}`);
    setShowReportModal(false);
    setReportReason('');
    // Afficher un message de succès
  };

  // Style pour la page
  const pageStyle = {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    paddingTop: "20px",
    paddingBottom: "20px"
  };

  // Style pour l'en-tête
  const headerStyle = {
    backgroundColor: "#4a6fa5",
    color: "white",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px"
  };

  // Générer la pagination
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div style={pageStyle}>
      <Container>
        {/* En-tête */}
        <Row className="mb-4">
          <Col>
            <div style={headerStyle}>
              <h2 className="mb-0">Gestion des Publications</h2>
            </div>
          </Col>
        </Row>

        {/* Filtres et recherche */}
        <Row className="mb-4">
          <Col md={6}>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Rechercher une publication..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="me-2"
              />
              <Button variant="outline-primary">
                <FaSearch /> Rechercher
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <Dropdown className="me-2">
              <Dropdown.Toggle variant="outline-secondary">
                <FaFilter /> Filtrer
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Tous</Dropdown.Item>
                <Dropdown.Item>Publiés</Dropdown.Item>
                <Dropdown.Item>En attente</Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary">
                <FaSortAmountDown /> Trier
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Date (plus récent)</Dropdown.Item>
                <Dropdown.Item>Date (plus ancien)</Dropdown.Item>
                <Dropdown.Item>Titre (A-Z)</Dropdown.Item>
                <Dropdown.Item>Auteur (A-Z)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Tableau des publications */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <>
            <Card className="shadow-sm">
              <Card.Body className="p-0">
                <Table responsive hover className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th>Titre</th>
                      <th>Auteur</th>
                      <th>Date</th>
                      
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPublications.length > 0 ? (
                      filteredPublications.map((publication) => (
                        <tr key={publication.id}>
                          <td>{publication.title}</td>
                          <td>{publication.author}</td>
                          <td>{new Date(publication.date).toLocaleDateString()}</td>
                          <td>
                            <Badge bg="info" pill>{publication.category}</Badge>
                          </td>
                          <td>
                            <Badge bg={publication.status === "Publié" ? "success" : "warning"} pill>
                              {publication.status}
                            </Badge>
                          </td>
                          <td>
                            <Button 
                              variant="outline-danger" 
                              size="sm" 
                              className="me-1"
                              onClick={() => handleDeleteClick(publication)}
                            >
                              <FaTrash /> Supprimer
                            </Button>
                            <Button 
                              variant="outline-warning" 
                              size="sm"
                              onClick={() => handleReportClick(publication)}
                            >
                              <FaFlag /> Signaler
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          Aucune publication trouvée
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} />
                {paginationItems}
                <Pagination.Next onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
              </Pagination>
            </div>
          </>
        )}
      </Container>

      {/* Modal de confirmation de suppression */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmer la suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPublication && (
            <p>Êtes-vous sûr de vouloir supprimer la publication <strong>"{selectedPublication.title}"</strong> ?</p>
          )}
          <p className="text-danger mb-0">Cette action est irréversible.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Annuler
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de signalement */}
      <Modal show={showReportModal} onHide={() => setShowReportModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Signaler une publication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPublication && (
            <>
              <p>Vous allez signaler la publication <strong>"{selectedPublication.title}"</strong></p>
              <Form.Group className="mb-3">
                <Form.Label>Raison du signalement</Form.Label>
                <Form.Select 
                  value={reportReason} 
                  onChange={(e) => setReportReason(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez une raison</option>
                  <option value="Contenu inapproprié">Contenu inapproprié</option>
                  <option value="Plagiat">Plagiat</option>
                  <option value="Informations incorrectes">Informations incorrectes</option>
                  <option value="Spam">Spam</option>
                  <option value="Autre">Autre</option>
                </Form.Select>
              </Form.Group>
              {reportReason === "Autre" && (
                <Form.Group className="mb-3">
                  <Form.Label>Précisez</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReportModal(false)}>
            Annuler
          </Button>
          <Button 
            variant="warning" 
            onClick={confirmReport}
            disabled={!reportReason}
          >
            Signaler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PublicationsManager;