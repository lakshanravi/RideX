import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo1 from "../assets/icons/Logo1.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // State to store login status and user role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); // traveler or driver

  // Function to check login status and user role
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token'); // Check if token exists
    const role = localStorage.getItem('userRole'); // Get user role (traveler or driver)
    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role); // Set role from localStorage
    } else {
      setIsLoggedIn(false);
      setUserRole('');
    }
  };

  // Check for login status and user role on component mount
  useEffect(() => {
    checkLoginStatus();

    // Listen for the storage change event (manual trigger or tab updates)
    window.addEventListener('storage', checkLoginStatus);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    localStorage.removeItem('userRole'); // Clear role
    setIsLoggedIn(false);
    setUserRole(''); // Clear role
    navigate('/login');
  };

  return (
    <header className="navbar">
      <img src={Logo1} alt="Logo" className="logo" />
      
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/services">Services</a>

        {/* Conditionally render based on login status and user role */}
        {isLoggedIn ? (
          <>
            {userRole === 'traveler' && (
              <>
                <a href="/travelerdashboard">Traveler Profile</a>
                <a href="/alltravelerlistenings">Others Travel Listenings</a>
                <a href="/hirelistenings">Find Hires</a>
              </>
            )}
            {userRole === 'driver' && (
              <>
                <a href="/driverdashboard">Driver Profile</a>
                <a href="/alltravelerlistenings">Find Travel Listenings</a>
              </>
            )}
            <a href="/about">About</a>
            <button className='logoutButton' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
            <a href="/about">About</a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
