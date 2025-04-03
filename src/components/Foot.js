import React from "react";
import "../styles/Footer.css";
const FooterF = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Exceptetur occaecuecat cupidatat.</h3>
        <p className="footer-text">
          
        </p>

        <div className="footer-grid">
          <div className="footer-column">
            <h5>About Us</h5>
            <p>Contact</p>
            <p>Terms & Conditions</p>
            <p>447 Evergreen Rd, Roseville, CA 95673</p>
            <p>+44 345 678 903</p>
            <p>tradstor12@mail.com</p>
          </div>

          <div className="footer-column">
            <h5>Subscribe to our newsletter</h5>
            <input type="email" placeholder="Email Address" className="footer-input" />
            <button className="footer-button">OK</button>
          </div>

          <div className="footer-column">
            <h5>Follow Us</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterF;