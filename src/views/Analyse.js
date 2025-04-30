import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Upload } from 'lucide-react';
import NavBar from "../components/NavBar";
import axios from 'axios';

const TumorAnalysisApp = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

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

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
      setPrediction(null); // reset prediction if a new image is selected
    };
    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!imageSrc) return;

    setLoading(true);
    try {
      axios.post("http://127.0.0.1:5000/predict",{ image: imageSrc })
      .then((response=>{
        console.log(response.data)
        setPrediction(response.data);
      }))
     .catch(error=>{
      console.log(error)
     })

     
    } catch (error) {
      console.error("Prediction error:", error);
      setPrediction({ error: "Erreur lors de la prédiction." });
    }
    setLoading(false);
  };

  return (
    <>
      <NavBar />
      <section className="imageAnalyser mt-3">
        <h1 className="text-center mb-4" style={{ color: '#833F92' }}>Analyse d'Image de Tumeur</h1>

        <p className="text-center mb-5" style={{ color: '#333' }}>
          Utilisez notre système d'IA pour analyser les images de tumeurs et obtenir une évaluation préliminaire des risques potentiels.
        </p>

        <div className="text-center mb-4">
          <h4 style={{ color: '#833F92' }}>Importer l'image de la tumeur</h4>
        </div>

        <div
          className={`upload-area border border-dashed rounded p-5 mb-4 text-center ${isDragging ? 'bg-light' : ''}`}
          style={{
            borderColor: '#833F92',
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
          <Upload size={48} color="#833F92" />
          <p className="mt-3 mb-2">Glissez et déposez l'image ici ou cliquez pour la sélectionner</p>
          <small className="text-muted mb-4">Formats acceptés: JPG, PNG, JPEG</small>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="upload-image"
          />
          <label htmlFor="upload-image">
            <Button
              as="span"
              variant="primary"
              className="mt-2"
              style={{ backgroundColor: '#833F92', borderColor: '#833F92' }}
            >
              Sélectionner une image
            </Button>
          </label>
        </div>

        {imageSrc && (
          <div className="text-center mb-4">
            <h5 style={{ color: '#833F92' }}>Aperçu de l'image</h5>
            <img src={imageSrc} alt="Uploaded preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
           <div className="container-fluid d-flex justify-content-center">
           <Button
              variant="success"
              onClick={handlePredict}
              className="mt-3 d-block"
              style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
            >
              Analyser l'image
            </Button>
           </div>
           
          </div>
        )}

        {loading && <p className="text-center text-info">Analyse en cours...</p>}

        {prediction && !prediction.error && (
          <div className="text-center mb-4">
            <h4 className="text-success">Résultat de l'analyse :</h4>
            <p><strong>Probabilité d'être Tumeur Sain:</strong> {(prediction["probability_of_being_tumor"] * 100).toFixed(2)}%</p>
            <p><strong>Catégorie prédite :</strong> 
  {prediction["probability_of_being_tumor"] > 0.5 ? '  Pas de tumeur' :' Tumeur détectée' }
</p>


{prediction["probability_of_being_tumor"] > 0.5 && <p className="alert alert-success">
    Aucune tumeur détectée. Il est conseillé de maintenir un suivi médical régulier.
  </p>}
  {prediction["probability_of_being_tumor"]  < 0.5 && <p className="alert alert-danger">
    La probabilité d'une tumeur est élevée. Veuillez consulter un professionnel de santé pour une évaluation plus approfondie.
  </p>
  }

          </div>
        )}

        {prediction?.error && (
          <p className="text-danger text-center">{prediction.error}</p>
        )}

        <h3 className="text-center mb-4" style={{ color: '#833F92' }}>Comment ça marche</h3>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center p-4">
                <div className="rounded-circle mx-auto mb-3 d-flex justify-content-center align-items-center"
                  style={{ width: '60px', height: '60px', backgroundColor: '#833F92' }}>
                  <span className="text-white fw-bold">1</span>
                </div>
                <Card.Title className="fw-bold" style={{ color: '#833F92' }}>Importez l'image</Card.Title>
                <Card.Text>
                  Téléchargez une image claire de la tumeur à analyser.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center p-4">
                <div className="rounded-circle mx-auto mb-3 d-flex justify-content-center align-items-center"
                  style={{ width: '60px', height: '60px', backgroundColor: '#833F92' }}>
                  <span className="text-white fw-bold">2</span>
                </div>
                <Card.Title className="fw-bold" style={{ color: '#833F92' }}>Analyse par l'IA</Card.Title>
                <Card.Text>
                  Notre système analyse l'image pour identifier les caractéristiques clés.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center p-4">
                <div className="rounded-circle mx-auto mb-3 d-flex justify-content-center align-items-center"
                  style={{ width: '60px', height: '60px', backgroundColor: '#833F92' }}>
                  <span className="text-white fw-bold">3</span>
                </div>
                <Card.Title className="fw-bold" style={{ color: '#833F92' }}>Résultats et recommandation</Card.Title>
                <Card.Text>
                  Recevez une évaluation des risques et des recommandations médicales.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default TumorAnalysisApp;
