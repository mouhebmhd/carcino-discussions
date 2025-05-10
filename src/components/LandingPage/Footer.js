import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h5>Restez connectés</h5>
            <p className="mb-4">Rejoignez notre communauté et trouvez du soutien à chaque étape de votre parcours.</p>
            
            {/* Social Media Icons */}
            <div className="social-icons mb-4">
              <a href="https://facebook.com" className="text-light mx-3">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-light mx-3">
                <i className="fab fa-twitter-square fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-light mx-3">
                <i className="fab fa-instagram-square fa-2x"></i>
              </a>
              <a href="https://linkedin.com" className="text-light mx-3">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="row">
          <div className="col-12">
            <p className="mb-2">
              <strong> Contactez-nous :</strong> carcino@contact.com
            </p>
            <p className="mb-2">
              <strong>Téléphone:</strong> +1 (123) 456-7890
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Rue de la Santé, Ville du Bien-être, Pays
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-12">
            <p className="mb-0">&copy; 2025 Carcino Disc . Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
