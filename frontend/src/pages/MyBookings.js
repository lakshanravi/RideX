import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyBookings.css';

const MyBooking = () => {
  const [mybookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/booking/bookings/user', {
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

  const openReviewPopup = (bookingId) => {
    setSelectedBookingId(bookingId);
    setShowPopup(true);
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3002/api/review/createReview/${selectedBookingId}`,
        {
          rating: reviewRating,
          reviewText: reviewText,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setFeedbackMessage('Review submitted successfully!');
      console.log('Review submitted successfully:', response.data);
    } catch (error) {
      setFeedbackMessage('Error submitting review. Please try again.');
      console.error('Error submitting review:', error);
    } finally {
      setShowPopup(false); // Close the popup
      setShowFeedbackMessage(true); // Show the feedback message
      setTimeout(() => {
        setShowFeedbackMessage(false); // Hide the feedback message after a few seconds
      }, 3000);
    }
  };

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
                  <strong>Date:</strong> {new Date(booking.hire?.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Vehicle Type:</strong> {booking.hire?.vehicleType}
                </p>
              </div>

                <div className="button-container">
                  <button className="reviewButton" onClick={() => openReviewPopup(booking._id)}>
                    Add review
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      )}
{showPopup && (
  <div className="review-popup">
    <div className="review-popup-content">
      <h2>Submit Your Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Rating:
          <input
            type="number"
            value={reviewRating}
            onChange={(e) => setReviewRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </label>
        <label>
          Comment:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Review</button>
        <button type="button" onClick={() => setShowPopup(false)}>
          Cancel
        </button>
      </form>
    </div>
  </div>
)}


      {showFeedbackMessage && (
        <div className={`feedback-message ${feedbackMessage.includes('successfully') ? 'success' : 'error'}`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
