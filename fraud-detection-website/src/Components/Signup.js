import React from "react";
import "./Auth.css"; // Import shared CSS file for Login and Signup
import { useNavigate } from "react-router-dom";

function Signup({ handleLogin }) {
    const navigate = useNavigate();

    const loginUser = () => {
        handleLogin(); // Update login state
        navigate("/"); // Redirect to Dashboard
      };
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
        </div>
        <button type="submit" className="auth-button" onClick={loginUser}>Sign Up</button>
        <p className="switch-auth">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
