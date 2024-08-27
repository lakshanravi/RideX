import React from 'react';
import './LandingPage.css';

import AboutPage from './AboutPage';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

import travelImage from '../assets/images/im11.jpg';


const LandingPage = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleTravelerClick = () => {
    navigate('/travelersignup');
  };

  const handleDriverClick = () => {
    navigate('/driversignup');
  };
  return (
    <div className="landing-page">
      <h1 className="landing-title">Find your <span>Convenient</span> <br/> and <span>Comfortable</span> Travel</h1>
      <p>Our user-friendly platform makes arranging cost-effective shared journeys <br/>simple and secure. Join today and start collaborating on your travels!</p>
      <p>Register as</p>
      <div className="button-container">
        <button className='traveler-button' onClick={handleTravelerClick}>Traveler</button>
        <button className='driver-button' onClick={handleDriverClick}>Driver</button>
      </div>

        {/* Add Image Here */}
        <div className='image-container'>
        <img src={travelImage} alt="Travelpic" />
        </div>
      <section>
      <div className='about'>
      
      <AboutPage/>
      <Footer/>
    </div>
    </section>
  
    </div>
    

);
    
};

export default LandingPage;
