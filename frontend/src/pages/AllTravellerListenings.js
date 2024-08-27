import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllTravellerListenings.css'; // Import your CSS file

const AllTravellerListenings = () => {
  const [allListenings, setAllListenings] = useState([]);
  const [filteredListenings, setFilteredListenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    departure: '',
    arrival: '',
    date: ''
  });

  useEffect(() => {
    const fetchListenings = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/travellistening/getalllistenings', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAllListenings(response.data);
        setFilteredListenings(response.data);
      } catch (error) {
        console.error('Error fetching listenings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListenings();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  useEffect(() => {
    const filterListenings = () => {
      let filtered = allListenings;

      if (filters.departure) {
        filtered = filtered.filter(listening =>
          listening.departure.toLowerCase().includes(filters.departure.toLowerCase())
        );
      }

      if (filters.arrival) {
        filtered = filtered.filter(listening =>
          listening.arrival.toLowerCase().includes(filters.arrival.toLowerCase())
        );
      }

      if (filters.date) {
        filtered = filtered.filter(listening =>
          new Date(listening.date).toLocaleDateString() === new Date(filters.date).toLocaleDateString()
        );
      }

      setFilteredListenings(filtered);
    };

    filterListenings();
  }, [filters, allListenings]);

  const handleCallClick = (phone) => {
    // Direct to a call screen or open phone dialer
    window.location.href = `tel:${phone}`;
  };

  const handleMessageClick = (phone) => {
    // Direct to a message screen
    window.location.href = `/message/${phone}`; // Adjust based on your routing setup
  };

  return (
    <div className="all-traveller-listenings-container">
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
        <div className="traveller-listenings-list">
          {filteredListenings.length > 0 ? (
            filteredListenings.map((listening) => (
              <div key={listening._id} className="traveller">
                <div className="traveler-profilePic"></div>
                <div className="traveler-details">
                  <h2>{listening.name}</h2>
                  <div className="place">
                    <div className="heading">
                      <p>Departure:</p>
                    </div>
                    <div className="details">
                      <p>{listening.departure}</p>
                    </div>
                  </div>
                  <div className="place">
                    <div className="heading">
                      <p>Arrival:</p>
                    </div>
                    <div className="details">
                      <p>{listening.arrival}</p>
                    </div>
                  </div>
                  <div className="place">
                    <div className="heading">
                      <p>Date:</p>
                    </div>
                    <div className="details">
                      <p>{new Date(listening.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <button className="actionButton" onClick={() => handleCallClick(listening.phone)}>Call</button>
                  <button className="messageButton" onClick={() => handleMessageClick(listening.phone)}>Message</button>
                </div>
              </div>
            ))
          ) : (
            <p>No traveler listenings found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllTravellerListenings;
