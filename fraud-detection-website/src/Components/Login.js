import React from "react";
import "./Auth.css"; // Import shared CSS file for Login and Signup
import { useNavigate } from "react-router-dom";

function Login({ handleLogin }) {
    const navigate = useNavigate();
  
    const loginUser = () => {
      handleLogin(); // Update login state
      navigate("/"); // Redirect to Dashboard
    };
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="auth-button" onClick={loginUser}>Login</button>
        <p className="switch-auth">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
