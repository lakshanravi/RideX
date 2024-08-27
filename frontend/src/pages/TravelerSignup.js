import React, { useState } from 'react';
import axios from 'axios';
import './TravelerSignup.css'; // Import the CSS file

const TravelerSignup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    nic: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/api/users/createuser', formData);
      setSuccess(response.data.message);
      setError(null);
    } catch (error) {
      setError(error.response.data.error || "An error occurred");
      setSuccess(null);
    }
  };

  return (
    <div className="signup-form">
      <h2>Traveler Signup</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          NIC:
          <input
            type="text"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default TravelerSignup;
