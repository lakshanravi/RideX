// src/pages/Services.jsx
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our <span>Services</span></h1>
      <p className="services-description">
        We offer a range of services to make your ride-sharing experience smooth, safe, and reliable.
      </p>

      <ul className="services-list">
        <li>Find nearby drivers easily</li>
        <li>Real-time tracking and notifications</li>
        <li>Secure payment options</li>
        <li>24/7 customer support</li>
        <li>Driver and passenger ratings</li>
      </ul>
    </div>
  );
}

export default Services;
