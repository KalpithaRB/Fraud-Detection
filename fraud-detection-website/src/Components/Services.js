import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        {/* Customer Service */}
        <div className="service-card">
          <h2 className="service-title">For Customers</h2>
          <p className="service-description">
            Check if a website is legitimate or not using our advanced tools.
          </p>
          <button className="service-button">Check Website</button>
        </div>

        {/* Supplier Service */}
        <div className="service-card">
          <h2 className="service-title">For Suppliers</h2>
          <p className="service-description">
            Verify the legitimacy of UPI IDs to avoid frauds and ensure secure
            transactions.
          </p>
          <button className="service-button">Check UPI</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
