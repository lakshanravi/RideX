import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
  const [seatsBooked, setSeatsBooked] = useState('');
  const [message, setMessage] = useState('');
  const { hireId } = useParams(); // Get hireId from URL parameters

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Assuming the JWT token is stored in localStorage

      const response = await axios.post(
        `http://localhost:3002/api/booking/bookings/${hireId}`, // Correct API endpoint
        { seatsBooked },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error creating booking');
    }
  };

  return (
    <div>
      <h2>Book Your Seats</h2>
      <form onSubmit={handleBooking}>
        <div>
          <label htmlFor="seatsBooked">Seats to Book:</label>
          <input
            type="number"
            id="seatsBooked"
            value={seatsBooked}
            onChange={(e) => setSeatsBooked(e.target.value)}
            required
            min="1"
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
