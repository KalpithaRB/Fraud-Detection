import React from "react";
import "./Footer.css"; // Import the CSS file for footer styling
import { useNavigate } from "react-router-dom";

function Footer() {
  const navi = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Fraud Detection</h3>
          <p>Leading provider of cybersecurity solutions to protect your data and ensure privacy.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" onClick={() => navi("/")}>Home</a></li>
            <li><a href="#" onClick={() => navi("/team")}>Team</a></li>
            <li><a href="#" onClick={() => navi("/services")}>Services</a></li>
            <li><a href="#" onClick={() => navi("/contactus")} >Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>BMS College of Engineering, Basavangudi, Bangalore</p>
          
          <p>Email: contact@cbms.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fraud Detection. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
