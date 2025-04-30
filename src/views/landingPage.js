import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/LandingPage/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../components/LandingPage/AboutUs';
import Team from '../components/LandingPage/Team';
import ContactForm from '../components/LandingPage/Contact';
import Services from '../components/LandingPage/services';
import styles from "../components/LandingPage/style.module.css"
const LandingPage = () => {
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

export default LandingPage;
