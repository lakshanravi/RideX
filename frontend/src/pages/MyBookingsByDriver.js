import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyBookingsByDriver.css';

const MyBooking = () => {
  const [mybookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/booking/bookings/driver', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage or context
          },
        });
        setMyBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyBookings();
  }, []);

 

  

  return (
    <div className="mybooking-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mybooking-list">
          {mybookings.length > 0 ? (
            mybookings.map((booking) => (
              <div key={booking._id} className="mybooking-item">
                 <div className="mybooking-details">
                <h3>
                  Hire: {booking.hire?.departure} to {booking.hire?.arrival}
                </h3>
                <p>
                  <strong>Seats Booked:</strong> {booking.seatsBooked}
                </p>
                <p>
                  <strong>Booked By:</strong> {booking.user?.firstname} 

                </p>
                <p>
                  <strong>Email:</strong> {booking.user?.email} 
                  
                </p>
                <p>
                  <strong>Date:</strong> {new Date(booking.hire?.date).toLocaleDateString()}
                </p>
               
              </div>

                
              </div>
            ))
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      )}



     
    </div>
  );
};

export default MyBooking;
