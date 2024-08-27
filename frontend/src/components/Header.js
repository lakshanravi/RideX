// src/components/Header.js


import React from 'react';
import './Header.css';
import Logo1 from "../assets/icons/Logo1.png";
import {  useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <img src={Logo1} alt="Logo" className="logo" />
      <nav className="nav-links">
        <a href='/'>landingpage</a>
        <a href='/home'>Home</a>
        <a href='/cervices'>Services</a>

        <a href="/login">Login</a>   
        <a href="/signup">Signup</a>   
        <a href="/traveller-listening">Traveller Listening</a>   
        <a href="/hire">Hire</a>   
        <a href="/booking">Booking</a>   
        <a href="/about">AboutPage</a>   

      </nav>
      <button className='loginButton' onClick={() => navigate('/login')}>Login</button>

    </header>
  );
};

export default Header;
   