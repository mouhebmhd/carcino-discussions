import React from 'react';
import NavBr from './NavBr';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';
import Team from './Team';
import ContactForm from './Contact';

const PersonalLandingPage = () => {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        {/* Navigation */}
        <NavBr />

        {/* Header */}
        <header className="py-5 bg-light">
          <div className="container px-5 pb-5">
            <div className="row gx-5 align-items-center">
              
              {/* Texte de l'en-tête */}
              <div className="col-xxl-5 text-center text-xxl-start">
                <h2 className="fs-3 fw-light text-muted">CarsinoDisc</h2>
                <h1 className="display-3 fw-bolder mb-4">
                  <span className="text-primary">Ensemble, partageons l’espoir</span>
                </h1>
              </div>

              {/* Image de profil */}
              <div className="col-xxl-7 d-flex justify-content-center mt-4 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary rounded-circle shadow-lg">
                  <img className="profile-img img-fluid rounded-circle" src="4.jpg" alt="CarsinoDisc - Communauté d'entraide" />
                </div>
              </div>

            </div>
          </div>
        </header>

        {/* Sections */}
        <section id="about" className="about-section bg-light py-3">
          <AboutUs />
        </section>

        <section id="team" className="team-section bg-light py-3">
          <Team />
        </section>

        <section id="contact" className="py-3">
          <ContactForm />
        </section>
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default PersonalLandingPage;
