import React from "react";
import { Link } from "react-router-dom";

function SignupS() {
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                <div className="col-md-7 col-lg-5 d-none d-md-block d-flex justify-content-center align-items-center h-100">
                            <img
                                src="Mobile login-amico.png"
                                alt="login form"
                                className="img-fluid"
                                style={{ borderRadius: "1rem", maxHeight: "80%" }}
                            />
                            </div>


                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Bienvenue</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                           Créer votre compte 
                        </h5>

                        <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Votre Nom</label>
                      <input type="text" id="form3Example1c" class="form-control" />
                 
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Votre Email</label>
                      <input type="email" id="form3Example3c" class="form-control" />
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c">Mot de passe</label>
                      <input type="password" id="form3Example4c" class="form-control" />
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">Confirmer votre mot de passe</label>
                      <input type="password" id="form3Example4cd" class="form-control" />
                      
                    </div>
                  </div>
             <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                  </div>

                      
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Déja a un compte?{" "}
                      

<Link to="/Login" style={{ color: "#393f81" }}>
  Login
</Link>

                         
                        </p>
                        
                       
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupS;
