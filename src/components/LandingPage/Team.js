import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Image, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const teamMembers = [
  {
    name: 'Dhahri Nawres',
    title: 'Frontend Developer',
    description: "Je suis Dhahri Nawres, étudiant en Informatique de Gestion et développeur web. Je travaille sur CarsinoDisc, une plateforme sociale permettant aux patients atteints de cancer d'échanger et de s'entraider.",
    image: 'girl1.jpg',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Yasmine Khelifi',
    title: 'Full Stack Developer',
    description: "Je suis Yasmine Khelifi, développeuse full stack passionnée par les technologies web. J’ai conçu et développé la plateforme CarsinoDisc en veillant à offrir une navigation fluide et sécurisée pour tous les utilisateurs.",
    image: 'girl2.jpg',
    github: 'https://github.com/yasminek',
    twitter: 'https://twitter.com/yas_dev',
    linkedin: 'https://linkedin.com/in/yasminekhelifi',
  },
  {
    name: 'Omar Trabelsi',
    title: 'UI/UX Designer',
    description: "Je suis Omar Trabelsi, designer UI/UX avec un œil attentif aux détails. Mon objectif est de rendre l'expérience utilisateur de CarsinoDisc aussi intuitive et agréable que possible.",
    image: 'boy1.png',
    github: 'https://github.com/omarux',
    twitter: 'https://twitter.com/omarux',
    linkedin: 'https://linkedin.com/in/omartrabelsi',
  },
  {
    name: 'Lina Saidi',
    title: 'AI Engineer',
    description: "Je suis Lina Saidi, ingénieure en intelligence artificielle. J’ai contribué à CarsinoDisc en développant un système intelligent de classification des publications pour faciliter l'accès à l'information pertinente.",
    image: 'girl3.jpg',
    github: 'https://github.com/linasaidi',
    twitter: 'https://twitter.com/ai_lina',
    linkedin: 'https://linkedin.com/in/linasaidi',
  },
  {
    name: 'Houssem Ben Romdhane',
    title: 'Community Manager',
    description: "Je suis Houssem Ben Romdhane, chargé de communauté chez CarsinoDisc. Je veille à ce que chaque membre se sente écouté et accompagné, tout en animant les discussions et les échanges au sein de la plateforme.",
    image: 'boy3.jpg',
    github: 'https://github.com/houssembr',
    twitter: 'https://twitter.com/houssem_cm',
    linkedin: 'https://linkedin.com/in/houssembenromdhane',
  },
  {
    name: 'Salma Ferchichi',
    title: 'Data Analyst',
    description: "Je suis Salma Ferchichi, analyste de données spécialisée dans l'interprétation des interactions sur la plateforme CarsinoDisc. Mon travail permet d'améliorer continuellement l'expérience utilisateur en se basant sur des données réelles.",
    image: 'girl4.jpg',
    github: 'https://github.com/salma-data',
    twitter: 'https://twitter.com/salmadata',
    linkedin: 'https://linkedin.com/in/salmaferchichi',
  }
];


function Team() {
  return (
    <>
      <section id="team" className="team-section bg-light py-3">
        <div className="container py-5">
          <h2 className="text-center mb-4 display-4 fw-bold mainTextColor">Rencontrez l'équipe</h2>
          
          <Carousel indicators={false} interval={null} variant="dark">
            {/* Split team members into chunks for carousel slides */}
            {[...Array(Math.ceil(teamMembers.length / 3))].map((_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <Row className="g-4 d-flex justify-content-center">
                  {teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                    <Col md={4} key={index} className="d-flex justify-content-center">
                      <Card className="shadow-sm border-0 rounded-4 text-center p-3 h-100">
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
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Team;