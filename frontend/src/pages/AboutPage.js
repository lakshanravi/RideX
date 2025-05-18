import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About <span>Our Platform</span></h1>
      
      <p className="about-description">
        We are dedicated to providing a platform that connects travelers and drivers
        for convenient and comfortable shared journeys. Our mission is to make travel 
        more affordable and accessible for everyone while promoting sustainability through 
        ride-sharing. Join us today and experience a seamless travel experience!
      </p>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p>Email: <a href="mailto:support@yourplatform.com">support@yourplatform.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        <p>Address: 123 Travel Lane, Journey City, Country</p>
      </div>

      <div className="other-details">
        <h2 className="details-title">Why Choose Us?</h2>
        <ul>
          <li>Secure and reliable ride-sharing</li>
          <li>Affordable travel options</li>
          <li>Easy-to-use platform</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
