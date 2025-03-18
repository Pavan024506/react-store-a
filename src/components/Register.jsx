import React from "react";
import "./Login.css";

export default function Register() {
  return (
    <div className="login-container">
      <div className="login-title">
        <h2>Create Account</h2>
      </div>
      <div className="login-input">
        <p><input type="text" placeholder="Enter email" /></p>
        <p><input type="password" placeholder="Enter password" /></p>
      </div>
      <div className="login-button">
        <button>Register</button>
      </div>
      <div className="register-section">
        <p>Already have an account?</p>
        <button><a href="/login" style={{ color: "blue", textDecoration: "none" }}>Login</a></button>
      </div>
    </div>
  );
}
