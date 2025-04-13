import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';
import Team from './Team';
import ContactForm from './Contact';
import Services from './services';
import styles from "./style.module.css"
const PersonalLandingPage = () => {
  return (
    <div className="m-0 p-0" id='home'>
      <main className="m-0 p-0">
        {/* Navigation */}
        <NavBar />

        {/* Header */}
        <div className={`m-0 p-0 py-5  ${styles.mainSection}`}>
          <div className="container  ">
            <div className="row gx-5 ">
              
              
             

              

            </div>
          </div>
        </div>

        {/* Sections */}
          <AboutUs />
          <Services />

          <Team />

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
