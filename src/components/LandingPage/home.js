import React from 'react';
import NavBr from './NavBr';
import Footer from './Footer';

const PersonalLandingPage = () => {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        {/* Navigation */}
       <NavBr />

        {/* Header */}
        <header className="py-5">
          <div className="container px-5 pb-5">
            <div className="row gx-5 align-items-center">
              <div className="col-xxl-5">
                {/* Header text content */}
                <div className="text-center text-xxl-start">
                  
                  <div className="fs-3 fw-light text-muted">CarsinoDisc </div>
                  <h1 className="display-3 fw-bolder mb-5">
                    <span className="text-gradient d-inline">Ensemble, partageons l’espoir</span>
                  </h1>
                
                </div>
              </div>
              <div className="col-xxl-7">
                {/* Header profile picture  */}
                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                  <div className="profile bg-gradient-primary-to-secondary">
                    <img className="profile-img" src="/api/placeholder/400/400" alt="Profile" />
                    <div className="dots-1">
                      <svg viewBox="0 0 191.6 1215.4" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                          <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262 C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                          <path d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262 C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="dots-2">
                      <svg viewBox="0 0 191.6 1215.4" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                          <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262 C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                          <path d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262 C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="dots-3">
                      <svg viewBox="0 0 191.6 1215.4" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                          <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262 C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                          <path d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262 C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="dots-4">
                      <svg viewBox="0 0 191.6 1215.4" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                          <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262 C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                          <path d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262 C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section class="about-section bg-light py-5">
  <div class="container px-4">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-8">
        <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
          <div class="text-center mb-4">
            <h2 class="display-4 fw-bold text-primary mb-3">
              About Us
              <div class="border-bottom border-primary border-2 w-25 mx-auto mt-2"></div>
            </h2>
            <p class="lead fw-light mb-4 text-secondary fst-italic">Une Communauté Solidaire pour les Patients Atteints de Cancer</p>
          </div>
          
          <div class="card-body px-md-4">
            <p class="text-muted fs-5 mb-4 lh-base">
              CarsinoDisc est une plateforme innovante dédiée aux patients atteints de cancer et à leurs proches. Inspirée du concept des forums communautaires, notre mission est d'offrir un espace bienveillant où chacun peut partager son expérience, poser des questions, trouver du soutien et accéder à des conseils adaptés à son type de cancer.
            </p>
            <p class="text-muted fs-5 mb-5 lh-base">
              Grâce à une organisation en communautés thématiques, des discussions enrichissantes et un système de classification intelligent des publications, CarsinoDisc facilite l'échange d'informations essentielles tout en favorisant l'entraide et la sensibilisation. Ensemble, bâtissons un espace d'écoute, de partage et d'espoir.
            </p>
            
            <div class="d-flex justify-content-center gap-4 mt-4">
              <a class="btn btn-primary btn-lg rounded-circle" href="#!" aria-label="Twitter">
                <i class="bi bi-twitter"></i>
              </a>
              <a class="btn btn-primary btn-lg rounded-circle" href="#!" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a class="btn btn-primary btn-lg rounded-circle" href="#!" aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PersonalLandingPage;