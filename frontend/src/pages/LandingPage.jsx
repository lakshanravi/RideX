import React from 'react';
import './LandingPage.css';
import AboutPage from './AboutPage';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

import travelImage from '../assets/images/im11.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">
          Find your <span>Convenient</span><br /> and <span>Comfortable</span> Travel
        </h1>
        <p className="landing-subtitle">
          Our user-friendly platform makes arranging cost-effective shared journeys<br />
          simple and secure. Join today and start collaborating on your travels!
        </p>
        <p className="register-text">Register as:</p>

        <div className="button-container">
          <button className="traveler-button" onClick={() => navigate('/travelersignup')}>Traveler</button>
          <button className="driver-button" onClick={() => navigate('/driversignup')}>Driver</button>
        </div>
      </div>

      <div className="image-container">
        <img src={travelImage} alt="Traveling" />
      </div>

      <section className="about-section">
        <AboutPage />
          <Footer />
      
      </section>
   
    
    </div>
  );
};

export default LandingPage;
