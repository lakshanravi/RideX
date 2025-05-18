import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyHires.css'; // Import your CSS file

const HireListenings = () => {
  const [listenings, setListenings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListenings = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/hire/getMyHires', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage or context
          },
        });
        setListenings(response.data);
      } catch (error) {
        console.error('Error fetching listenings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListenings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/api/hire/deletehire/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setListenings(listenings.filter((listening) => listening._id !== id)); // Remove deleted listening from state
    } catch (error) {
      console.error('Error deleting listening:', error);
    }
  };

  
  return (
    <div className="travel-listenings-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="listenings-list">
          {listenings.length > 0 ? (
            listenings.map((listening) => (
              <div key={listening._id} className="listening-item">
                <p><strong>Phone:</strong> {listening.phone}</p>
                <p><strong>Departure:</strong> {listening.departure}</p>
                <p><strong>Arrival:</strong> {listening.arrival}</p>
                <p><strong>Seat Number:</strong> {listening.noOfSeats}</p>
            
                <p><strong>Description:</strong> {listening.description}</p>
                <p><strong>Vehicle Type:</strong> {listening.vehicleType}</p>
                <p><strong>Number of Seats:</strong> {listening.noOfSeats}</p>
                <p><strong>Seat Price:</strong> ${listening.seatPrice}</p>
                <p><strong>Departure Time:</strong> {listening.departureTime}</p>
                



                <p><strong>Date:</strong> 
                {new Date(listening.date).toLocaleDateString()}</p>
                <div className="actions">
                  <button onClick={() => handleDelete(listening._id)} className="delete-button">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No travel listenings found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HireListenings;
