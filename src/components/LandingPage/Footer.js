import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer py-4 mt-auto border-top" style={{ backgroundColor: '#3f9ef8' }}>
        <div className="container px-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div className="d-flex align-items-center">
                <img src="logoo.png" alt="Logo" className="me-2" width="40" height="40" />
                <div className="small text-muted">
                  &copy; CarsinoDisc 2025 | Tous droits réservés
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3 mb-lg-0 text-center">
              <div className="d-flex justify-content-center gap-3">
                <a href="#!" className="btn btn-sm btn-outline-secondary rounded-circle">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#!" className="btn btn-sm btn-outline-secondary rounded-circle">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#!" className="btn btn-sm btn-outline-secondary rounded-circle">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#!" className="btn btn-sm btn-outline-secondary rounded-circle">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="small text-muted mb-0">
                CarsinoDisc est une plateforme de soutien pour les patients atteints de cancer et leurs proches.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
