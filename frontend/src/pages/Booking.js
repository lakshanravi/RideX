// src/pages/Booking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/booking');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.details}</li>
        ))}
      </ul>
    </div>
  );
}

export default Booking;
