import React from 'react'
import NavBr from './NavBr'
import Footer from './Footer'

function AboutUs() {
  return (
    <div>
        <NavBr />
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
  <Footer />
  </div>
  )
}

export default AboutUs