import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TravelerLogin from './pages/TravelerLogin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TravelerDashboard from './pages/TravelerDashboard.js';
import DriverDashboard from './pages/DriverDashboard.js';
import AllTravellerListenings from './pages/AllTravellerListenings.js';

import AboutPage from './pages/AboutPage';
import LandingPage  from './pages/LandingPage';
import TravelerSignup from './pages/TravelerSignup';
import DriverSignup from './pages/DriverSignup';
import MyTravelListenings from './pages/MyTravelListenings'
import HireListenings from './pages/HireListenings.js';
import HireBooking from './pages/HireBooking.js';
import MyBooking from './pages/MyBookings.js';
import MyHire from './pages/MyHires.js';
import MyBookingByDriver from './pages/MyBookingsByDriver.js';
import MyReview from './pages/MyReview.js';
import Services from './pages/Services.jsx';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/travelerlogin" element={<TravelerLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/driverdashboard"
          element={token ? <DriverDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/travelerdashboard"
          element={token ? <TravelerDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/mytravellistenings"
          element={token ? <MyTravelListenings /> : <Navigate to="/login" />}
        />
        <Route
          path="/hirelistenings"
          element={token ? <HireListenings /> : <Navigate to="/login" />}
        />

        <Route
          path="/alltravelerlistenings"
          element={token ? <AllTravellerListenings /> : <Navigate to="/login" />}
        />

        
        <Route
          path="/hirebooking"
          element={token ? <HireBooking /> : <Navigate to="/login" />}
        />

        <Route
          path="/mybooking"
          element={token ? <MyBooking /> : <Navigate to="/login" />}
        />
        <Route
          path="/myhire"
          element={token ? <MyHire /> : <Navigate to="/login" />} 
        />

        <Route path="/mybookingbydriver"
         element={token ? <MyBookingByDriver /> : <Navigate to="/login" />} />

        <Route path="/myreview"
         element={token ? <MyReview /> : <Navigate to="/login" />} />
       
        <Route path="/about" element={<AboutPage />} />
        <Route path="/travelersignup" element={<TravelerSignup />} />
        <Route path="/driversignup" element={<DriverSignup />} />
      </Routes>
    </div>


    
  );
}

export default App;
