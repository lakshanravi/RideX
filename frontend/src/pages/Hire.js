// src/pages/Hire.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hire() {
  const [hires, setHires] = useState([]);

  useEffect(() => {
    const fetchHires = async () => {
      try {
        const response = await axios.get('/api/hire/getallhires');
        setHires(response.data);
      } catch (error) {
        console.error('Error fetching hires:', error);
      }
    };

    fetchHires();
  }, []);

  return (
    <div>
      <h2>Hire</h2>
      <ul>
        {hires.map((hire) => (
          <li key={hire.id}>{hire.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hire;
