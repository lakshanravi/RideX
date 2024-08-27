import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HireListenings.css';

const HireListening = () => {
  const [allHires, setAllHires] = useState([]); 
  const [filteredHires, setFilteredHires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    departure: '',
    arrival: '',
    date: ''
  });
  const [bookingHireId, setBookingHireId] = useState(null); 
  const [seatsBooked, setSeatsBooked] = useState(''); 

  useEffect(() => {
    const fetchHires = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3002/api/hire/getallhires', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAllHires(response.data);
        setFilteredHires(response.data);
      } catch (error) {
        console.error('Error fetching hires:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHires();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  useEffect(() => {
    const filterHires = () => {
      let filtered = allHires;

      if (filters.departure) {
        filtered = filtered.filter(hire =>
          hire.departure.toLowerCase().includes(filters.departure.toLowerCase())
        );
      }

      if (filters.arrival) {
        filtered = filtered.filter(hire =>
          hire.arrival.toLowerCase().includes(filters.arrival.toLowerCase())
        );
      }

      if (filters.date) {
        filtered = filtered.filter(hire =>
          new Date(hire.date).toLocaleDateString() === new Date(filters.date).toLocaleDateString()
        );
      }

      setFilteredHires(filtered);
    };

    filterHires();
  }, [filters, allHires]);

  const handleCallClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleBookingClick = (hireId) => {
    if (bookingHireId === hireId) {
      setBookingHireId(null); 
    } else {
      setBookingHireId(hireId); 
    }
  };

  const handleBookingSubmit = async (e, hireId) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://localhost:3002/api/booking/bookings/${hireId}`,
        { seatsBooked },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.alert('Booking successful: ' + response.data.message);
      setBookingHireId(null);
    } catch (error) {
      window.alert('Error: ' + (error.response?.data?.message || 'Error creating booking'));
    }
  };

  return (
    <div className="hire-listenings-container">
      <div className="search-bar">
        <input
          type="text"
          name="departure"
          placeholder="Search by Departure"
          value={filters.departure}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="arrival"
          placeholder="Search by Arrival"
          value={filters.arrival}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="hire-list">
          {filteredHires.length > 0 ? (
            filteredHires.map((hire) => (
              <div key={hire._id} className="hire-item">
                <p><strong>Departure:</strong> {hire.departure}</p>
                <p><strong>Arrival:</strong> {hire.arrival}</p>
                <p><strong>Description:</strong> {hire.description}</p>
                <p><strong>Vehicle Type:</strong> {hire.vehicleType}</p>
                <p><strong>Number of Seats:</strong> {hire.noOfSeats}</p>
                <p><strong>Seat Price:</strong> ${hire.seatPrice}</p>
                <p><strong>Departure Time:</strong> {hire.departureTime}</p>
                <p><strong>Date:</strong> {new Date(hire.date).toLocaleDateString()}</p>

                <div className="button">
                  <button className="actionButton" onClick={() => handleCallClick(hire.phone)}>Call</button>
                  <button className="messageButton" onClick={() => handleBookingClick(hire._id)}>Book</button>
                </div>

                {bookingHireId === hire._id && (
                  <div className="booking-form">
                    <form onSubmit={(e) => handleBookingSubmit(e, hire._id)}>
                      <div>
                        <label htmlFor="seatsBooked">Seats to Book:</label>
                        <input
                          type="number"
                          id="seatsBooked"
                          value={seatsBooked}
                          onChange={(e) => setSeatsBooked(e.target.value)}
                          required
                          min="1"
                          max={hire.noOfSeats}
                        />
                      </div>
                      <button type="submit">Confirm Booking</button>
                    </form>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No hires found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HireListening;
