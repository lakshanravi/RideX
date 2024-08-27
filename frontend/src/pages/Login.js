import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Importing the updated CSS file
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('driver'); // Default to 'driver'

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

      // Store JWT token in local storage(this one configured in backend)
      localStorage.setItem('token', response.data.token);

      // Redirect to the appropriate dashboard based on role
      const redirectPath = role === 'driver' ? '/driverdashboard' : '/travelerdashboard';
      navigate(redirectPath);

    } catch (error) {
      console.error('Login failed:', error);
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
          />
          Traveler
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
