import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileEditForm() {
  const [profile, setProfile] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    age: '',
    email: '',
    motDePasse: '',
    numeroTelephone: ''
  });

  const [validated, setValidated] = useState(false);
  const [customErrors, setCustomErrors] = useState({
    age: '',
    numeroTelephone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'age') {
      // Limite l'âge à 2 chiffres max et seulement des chiffres
      const onlyDigits = value.replace(/\D/g, '');
      const limitedValue = onlyDigits.substring(0, 2);
      
      setProfile({
        ...profile,
        [name]: limitedValue
      });
      
      // Validation en temps réel pour l'âge
      if (limitedValue && limitedValue.length !== 2) {
        setCustomErrors({
          ...customErrors,
          age: "L'âge doit contenir exactement 2 chiffres"
        });
      } else {
        setCustomErrors({
          ...customErrors,
          age: ''
        });
      }
    } 
    else if (name === 'numeroTelephone') {
      // Limite le numéro à 8 chiffres max et seulement des chiffres
      const onlyDigits = value.replace(/\D/g, '');
      const limitedValue = onlyDigits.substring(0, 8);
      
      setProfile({
        ...profile,
        [name]: limitedValue
      });
      
      // Validation en temps réel pour le numéro de téléphone
      if (limitedValue && limitedValue.length !== 8) {
        setCustomErrors({
          ...customErrors,
          numeroTelephone: "Le numéro de téléphone doit contenir exactement 8 chiffres"
        });
      } else {
        setCustomErrors({
          ...customErrors,
          numeroTelephone: ''
        });
      }
    } 
    else {
      setProfile({
        ...profile,
        [name]: value
      });
    }
  };

  const validateCustomFields = () => {
    const errors = {
      age: '',
      numeroTelephone: ''
    };
    let isValid = true;

    // Validation âge (doit avoir exactement 2 chiffres s'il est fourni)
    if (profile.age && profile.age.length !== 2) {
      errors.age = "L'âge doit contenir exactement 2 chiffres";
      isValid = false;
    }

    // Validation numéro de téléphone (doit avoir exactement 8 chiffres)
    if (profile.numeroTelephone && profile.numeroTelephone.length !== 8) {
      errors.numeroTelephone = "Le numéro de téléphone doit contenir exactement 8 chiffres";
      isValid = false;
    }

    setCustomErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    // Validation personnalisée
    const customValid = validateCustomFields();
    
    if (form.checkValidity() === false || !customValid) {
      event.stopPropagation();
    } else {
      // Ici vous pouvez envoyer les données à votre API
      console.log("Données du profil à envoyer:", profile);
      alert("Profil mis à jour avec succès!");
    }

    setValidated(true);
  };

  const pageStyle = {
    backgroundColor: "#ffecf2", // fond rose clair
    minHeight: "100vh",
    paddingTop: "30px",
    paddingBottom: "30px"
  };
  
  const cardHeaderStyle = {
    backgroundColor: "#ff80ab", // rose plus foncé pour l'en-tête
    color: "white",
    fontWeight: "bold"
  };

  const buttonPrimaryStyle = {
    backgroundColor: "#f06292", // rose pour le bouton principal
    borderColor: "#f06292",
    fontWeight: "bold"
  };

  const formGroupStyle = {
    marginBottom: "15px"
  };

  const errorTextStyle = {
    color: '#dc3545',
    fontSize: '0.875em',
    marginTop: '0.25rem'
  };

  return (
    <div style={pageStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg">
              <Card.Header style={cardHeaderStyle}>
                <h3 className="mb-0 text-center">Modifier votre profil</h3>
              </Card.Header>
              <Card.Body className="bg-white">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group style={formGroupStyle} controlId="nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="nom"
                      value={profile.nom}
                      onChange={handleChange}
                      placeholder="Entrez votre nom"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez entrer votre nom.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group style={formGroupStyle} controlId="prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="prenom"
                      value={profile.prenom}
                      onChange={handleChange}
                      placeholder="Entrez votre prénom"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez entrer votre prénom.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group style={formGroupStyle} controlId="dateNaissance">
                    <Form.Label>Date de naissance</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      name="dateNaissance"
                      value={profile.dateNaissance}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez entrer votre date de naissance.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group style={formGroupStyle} controlId="age">
                    <Form.Label>Âge</Form.Label>
                    <Form.Control
                      type="text"
                      inputMode="numeric"
                      name="age"
                      value={profile.age}
                      onChange={handleChange}
                      placeholder="Entrez votre âge (2 chiffres)"
                      isInvalid={!!customErrors.age}
                      maxLength="2"
                    />
                    {customErrors.age && (
                      <div style={errorTextStyle}>{customErrors.age}</div>
                    )}
                  </Form.Group>

                  <Form.Group style={formGroupStyle} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      placeholder="Entrez votre email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez entrer une adresse email valide.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group style={formGroupStyle} controlId="motDePasse">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      name="motDePasse"
                      value={profile.motDePasse}
                      onChange={handleChange}
                      placeholder="Entrez votre mot de passe"
                      minLength="6"
                    />
                    <Form.Control.Feedback type="invalid">
                      Le mot de passe doit contenir au moins 6 caractères.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group style={formGroupStyle} controlId="numeroTelephone">
                    <Form.Label>Numéro de téléphone</Form.Label>
                    <Form.Control
                      type="text"
                      inputMode="numeric"
                      name="numeroTelephone"
                      value={profile.numeroTelephone}
                      onChange={handleChange}
                      placeholder="Entrez votre numéro de téléphone (8 chiffres)"
                      isInvalid={!!customErrors.numeroTelephone}
                      maxLength="8"
                    />
                    {customErrors.numeroTelephone && (
                      <div style={errorTextStyle}>{customErrors.numeroTelephone}</div>
                    )}
                  </Form.Group>

                  <div className="d-flex justify-content-between mt-4">
                    <Button variant="secondary">
                      Annuler
                    </Button>
                    <Button 
                      type="submit" 
                      style={buttonPrimaryStyle}
                      disabled={!!customErrors.age || !!customErrors.numeroTelephone}
                    >
                      Enregistrer les modifications
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileEditForm;