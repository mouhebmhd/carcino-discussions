import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h5>Stay Connected</h5>
            <p className="mb-4">Join our community and find support through every step of your journey.</p>
            
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
              <strong>Contact Us:</strong> carcino@contact.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Health St, Wellness City, Country
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-12">
            <p className="mb-0">&copy; 2025 Carcino Disc . All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
