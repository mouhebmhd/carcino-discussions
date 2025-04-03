import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const teamMembers = [
  {
    name: 'Dhahri Nawres',
    title: 'Frontend Developer',
    description: "Je suis Dhahri Nawres, étudiant en Informatique de Gestion et développeur web. Je travaille sur CarsinoDisc, une plateforme sociale permettant aux patients atteints de cancer d'échanger et de s'entraider.",
    image: 'avat2.jpg',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
];

function Team() {
  return (
    <>
      
      <div className="container py-5">
        <h2 className="text-center mb-4">Meet the team</h2>
        <Row className="g-4 d-flex justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={4} key={index} className="d-flex justify-content-center">
              <Card className="shadow-sm border-0 rounded-4 text-center p-3">
                <div className="d-flex justify-content-center mb-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    roundedCircle
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold mb-1">{member.name}</Card.Title>
                  <Card.Subtitle className="text-muted mb-2">{member.title}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                  <div>
                    <a href={member.github} className="text-decoration-none text-secondary me-2" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href={member.twitter} className="text-decoration-none text-secondary me-2" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href={member.linkedin} className="text-decoration-none text-secondary" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      
    </>
  );
}

export default Team;