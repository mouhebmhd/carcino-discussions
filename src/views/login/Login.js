// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css"
import Cookies from 'js-cookie';
import loginImage from "../../images/undraw_secure-login_m11a .png"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3030/utilisateur/login", {
        email,
        password,
      });
      console.log("token is  ",response)
      
      if(response.data.message=="Login error")
      {
        console.log("login error")
        setErrorMessage("Invalid Credentials ! Please Check your email and your password ! ")
      }
      else if(response.data.message=="Login Error ! Your Account is Blocked")
        {
          console.log("Login Error ! Your Account is Blocked")
          setErrorMessage("Login Error ! Your Account is Blocked ! ")
        }
      else 
      {
        console.log("Login Success ! ")

        setUser(response.data.userData);
        const token=(response.data.token)
        Cookies.set('auth_token', token, { expires: 7 }); 
        localStorage.setItem("user", JSON.stringify(response.data.userData));
      }
      
      
    } catch (error) {
      console.error("Login failed:", error);
      if(error.response.data.message=="Login error")
        {
          console.log("login error")
          setErrorMessage("Invalid Credentials ! Please Check your email and your password ! ")
        }
        else if(error.response.data.message=="Login Error ! Your Account is Blocked")
          {
            console.log("Login Error ! Your Account is Blocked")
            setErrorMessage("Login Error ! Your Account is Blocked ! ")
          }
    }
  };

   useEffect(() => {
    if (user) {
  
      navigate("/home");
  
    }
  }, [user]);

  return (
          <div className="row m-0 p-0 d-flex justify-content-center align-items-center h-100 formLoginContainer">
            <div className="col m-0 p-0 col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-7 col-lg-5 d-none d-md-block d-flex justify-content-center align-items-center h-100">
                    <img
                      src={loginImage}
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
                            style={{ color: "#833F92" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Bienvenue</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                          connectez-vous à votre compte
                        </h5>
                        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="email">
                            Email 
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">
                            Mot de passe
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleLogin}
                          >
                            Se connecter
                          </button>
                        </div>

                        <a className="small text-muted" href="#">Mot de passe oublié?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Vous n'avez pas de compte ?{' '}
                          <Link to="/signup" style={{ color: "#393f81" }}>
                            Inscrivez-vous ici
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
   
  );
}

export default Login;
