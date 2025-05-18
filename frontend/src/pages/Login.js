import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Importing the updated CSS file
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('driver'); // Default to 'driver'
  const [message, setMessage] = useState(''); // For displaying success or error message
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Determine the API endpoint based on role
      const apiEndpoint = role === 'driver'
        ? 'http://localhost:3002/api/drivers/logindriver'
        : 'http://localhost:3002/api/users/loginuser';

      const response = await axios.post(apiEndpoint, { email, password });
      console.log('Login successful:', response.data);

      // Store JWT token and user role in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', role); // Store the user role (driver or traveler)

      // Trigger a custom event to notify other components (like Header) to refresh
      const loginEvent = new Event('storage');
      window.dispatchEvent(loginEvent); // Notify Header of login change

      // Set success message
      setMessageType('success');
      setMessage('Login successful! Redirecting...');

      // Redirect to the appropriate dashboard after a short delay
      setTimeout(() => {
        const redirectPath = role === 'driver' ? '/driverdashboard' : '/travelerdashboard';
        navigate(redirectPath);
      }, 2000);

    } catch (error) {
      console.error('Login failed:', error);

      // Set error message
      setMessageType('error');
      setMessage('Login failed: Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="off"  // Disable autocomplete to avoid warnings
            className="login-input"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"  // Disable autocomplete to avoid warnings
            className="login-input"
          />
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="driver"
            checked={role === 'driver'}
            onChange={() => setRole('driver')}
            autoComplete="off"  // Disable autocomplete to avoid warnings
            className="login-radio"
          />
          Driver
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="traveler"
            checked={role === 'traveler'}
            onChange={() => setRole('traveler')}
            className="login-radio"
            autoComplete="off"  // Disable autocomplete to avoid warnings
          />
          Traveler
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>

      {/* Display success or error message */}
      {message && (
        <div className={`login-message ${messageType}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
