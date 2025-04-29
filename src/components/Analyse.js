import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Upload } from 'lucide-react';
import NavBar from "../components/NavBar";

const TumorAnalysisApp = () => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    // Handle file drop logic here
  };

  return (
    
    <Container className="py-5">
        <NavBar />
      <h1 className="text-center mb-4" style={{ color: '#d63384' }}>Analyse d'Image de Tumeur</h1>
      
      <p className="text-center mb-5" style={{ color: '#333' }}>
        Utilisez notre système d'IA pour analyser les images de tumeurs et obtenir une évaluation préliminaire des risques potentiels.
      </p>
      
      <div className="text-center mb-4">
      
        <h4 style={{ color: '#d63384' }}>Importer l'image de la tumeur</h4>
      </div>
      
      <div 
        className={`upload-area border border-dashed rounded p-5 mb-5 text-center ${isDragging ? 'bg-light' : ''}`}
        style={{ 
          borderColor: '#d63384', 
          borderWidth: '2px',
          minHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Upload size={48} color="#d63384" />
        <p className="mt-3 mb-2">Glissez et déposez l'image ici ou cliquez pour la sélectionner</p>
        <small className="text-muted mb-4">Formats acceptés: JPG, PNG, JPEG</small>
        <Button 
          variant="primary" 
          className="mt-2"
          style={{ backgroundColor: '#d63384', borderColor: '#d63384' }}
        >
          Sélectionner une image
        </Button>
      </div>
      
      <h3 className="text-center mb-4" style={{ color: '#d63384' }}>Comment ça marche</h3>
      
      <Row className="mb-5">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="rounded-circle bg-primary mx-auto mb-3 d-flex justify-content-center align-items-center" 
                style={{ width: '60px', height: '60px', backgroundColor: '#d63384' }}>
                <span className="text-white fw-bold">1</span>
              </div>
              <Card.Title className="fw-bold" style={{ color: '#d63384' }}>Importez l'image</Card.Title>
              <Card.Text>
                Téléchargez une image claire de la tumeur à analyser.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="rounded-circle bg-primary mx-auto mb-3 d-flex justify-content-center align-items-center" 
                style={{ width: '60px', height: '60px', backgroundColor: '#d63384' }}>
                <span className="text-white fw-bold">2</span>
              </div>
              <Card.Title className="fw-bold" style={{ color: '#d63384' }}>Analyse par l'IA</Card.Title>
              <Card.Text>
                Notre système analyse l'image pour identifier les caractéristiques clés.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="rounded-circle bg-primary mx-auto mb-3 d-flex justify-content-center align-items-center" 
                style={{ width: '60px', height: '60px', backgroundColor: '#d63384' }}>
                <span className="text-white fw-bold">3</span>
              </div>
              <Card.Title className="fw-bold" style={{ color: '#d63384' }}>Résultats et recommandation</Card.Title>
              <Card.Text>
                Recevez une évaluation des risques et des recommandations médicales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div className="text-end mt-4">
        <small className="text-muted">
          Activer Windows<br />
          Accédez aux paramètres pour activer Windows.
        </small>
      </div>
    </Container>
  );
};

export default TumorAnalysisApp;