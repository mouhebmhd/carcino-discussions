import React from 'react'


function AboutUs() {
  return (
    <div>
        
        <section className="about-section bg-light py-5">
    <div className="container px-4">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">
            <div className="text-center mb-4">
              <h2 className="display-4 fw-bold text-primary mb-3">
                About Us
                <div className="border-bottom border-primary border-2 w-25 mx-auto mt-2"></div>
              </h2>
              <p className="lead fw-light mb-4 text-secondary fst-italic">Une Communauté Solidaire pour les Patients Atteints de Cancer</p>
            </div>
            
            <div className="card-body px-md-4">
              <p className="text-muted fs-5 mb-4 lh-base">
                CarsinoDisc est une plateforme innovante dédiée aux patients atteints de cancer et à leurs proches. Inspirée du concept des forums communautaires, notre mission est d'offrir un espace bienveillant où chacun peut partager son expérience, poser des questions, trouver du soutien et accéder à des conseils adaptés à son type de cancer.
              </p>
              <p className="text-muted fs-5 mb-5 lh-base">
                Grâce à une organisation en communautés thématiques, des discussions enrichissantes et un système de ClassNameification intelligent des publications, CarsinoDisc facilite l'échange d'informations essentielles tout en favorisant l'entraide et la sensibilisation. Ensemble, bâtissons un espace d'écoute, de partage et d'espoir.
              </p>
              
              <div className="d-flex justify-content-center gap-4 mt-4">
                <a className="btn btn-primary btn-lg rounded-circle" href="#!" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="btn btn-primary btn-lg rounded-circle" href="#!" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="btn btn-primary btn-lg rounded-circle" href="#!" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </div>
  )
}

export default AboutUs