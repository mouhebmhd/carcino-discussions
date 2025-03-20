import React from "react";
import { FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";
import "../styles/Signup.css";

function SignupS() {
  return (
    <div className="signup-container">
      
        <div className="logo-container">
          <img src="/imagee2.jpg" alt="Logo" className="logoo" />
        </div>
      
      <div className="signup-right">
        <h1>Welcome To Carcino-Disc</h1>
        <button className="signup-btn google">
          <FaGoogle /> Sign up with Google
        </button>
        <button className="signup-btn apple">
          <FaApple /> Sign up with Apple
        </button>
        <button className="signup-btn email">
          <FaEnvelope /> Sign up with email
        </button>
        <p className="signin-link">
          Already have an account? <a href="#">Sign in</a>
        </p>
        <p className="terms">
          By Signing Up, You Agree The Terms Of Service And Privacy Policy.
          </p>
      </div>
    </div>
  );
};

export default SignupS;