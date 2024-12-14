import React from "react";
import "./Dashboard.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import avatarImage from './Assets/rb_4707.png'

function CyberChip({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();  // React Router's hook for programmatic navigation
  return (
    <div className="Dashboard">
      {/* Navbar */}
      <header className="header">
        <div className="logo">Fruad Detection</div>
        <div className="glass-button">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" onClick={() => navigate("/team")}>Team</a></li>
            <li><a href="#" onClick={() => navigate("/services")}>Services</a></li>
          </ul>
        </nav></div>
        {/* <button className="contact-button">Contact us</button>*/}
        <div className="Login-Signup-buttons">
        {isLoggedIn ? (
            <>
              <div className="profile-avatar" onClick={() => navigate("/profile")}>
              <img
                  src={avatarImage}
                  alt="Profile Avatar"
                  className="avatar-image"
                />
              </div>
              <button className="contact-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="contact-button" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="contact-button" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
       {/*<button className="contact-button" onClick={() => navigate('/login')}>
        Login
      </button>
      <button className="contact-button" onClick={() => navigate('/signup')}>
        Sign Up
      </button>*/}</div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>24/7 Fraud Detection</h1>
        <p>Content to be added yet.</p>
        <div className="buttons">
          <button className="primary-button">Get started</button>
          <button className="secondary-button">Contact us</button>
        </div>
      </section>

      {/* Partners Section */}
     { /*<section className="partners">
        <h2>Partners</h2>
        <p>We're Working With</p>
        <div className="partner-logos">
          {/* Placeholder for partner logos */}
         { /*<div className="logo-placeholder"></div>
          <div className="logo-placeholder"></div>
          <div className="logo-placeholder"></div>
          <div className="logo-placeholder"></div>
        </div>
      </section>*/}

      {/* Who We Are Section */}
      {/*<section className="who-we-are">
        <h3>Functions</h3>
        <h2>Crosscheck the sellers</h2>
        <p></p>
        <ul>
          <li>Enhanced security for your websites.</li>
          <li>Recognising the Real among the crowd.</li>
          <li>Guaranteed privacy and data protection.</li>
        </ul>
      </section>*/}

      {/* Services Section */}
      <section className="services">
        <h3>What We Do</h3>
        <h2>Using Gstcrossvalidation, and another Feature</h2>
        <div className="service-cards">
          <div className="card">GST Validation</div>
          <div className="card">Another Feautre</div>
          <div className="card">Another Feature</div>
        </div>
        <button className="primary-button">Get started</button>
      </section>
    </div>
  );
}

export default CyberChip;
