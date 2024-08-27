import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TravelerDashboard.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const TravelerDashboard = () => {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [travelPost, setTravelPost] = useState({
    phone: '',
    departure: '',
    arrival: '',
    date: '',
  });
  const [postingStatus, setPostingStatus] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user details
        const userDetailsResponse = await axios.get('http://localhost:3002/api/users/details', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage or context
          },
        });
        setUserDetails(userDetailsResponse.data);

        // Fetch user profile picture
        const profilePicResponse = await axios.get('http://localhost:3002/api/users/profile-pic', {
          responseType: 'blob', // Ensure the response type is 'blob' to handle image data
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage or context
          },
        });
        const profilePicUrl = URL.createObjectURL(profilePicResponse.data); // Create an object URL for the image
        setProfilePicUrl(profilePicUrl);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTravelPost({ ...travelPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the travel details to the backend
       await axios.post('http://localhost:3002/api/travellistening/createListening', travelPost, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage or context
        },
      });
      setPostingStatus('Travel post created successfully!');
      setTravelPost({
        phone: '',
        departure: '',
        arrival: '',
        date: '',
      }); // Clear form fields after submission
    } catch (error) {
      console.error('Error creating travel post:', error);
      setPostingStatus('Failed to create post.');
    }
  };

  return (
    <div className="traveler-dashboard">
      {userDetails ? (
        <div>
          <div className="profile-pic-container">
            <img
              src={profilePicUrl || '/default-profile-pic.png'} // Fallback image if profilePicUrl is not available
              alt="Profile"
              className={profilePicUrl ? 'profile-pic' : 'fallback-img'} // Apply appropriate class based on availability of profilePicUrl
            />
          </div>
          <div className="user-details">
            <h2>{userDetails.firstname} {userDetails.lastname}</h2>
            <p>ID: {userDetails.userId}</p>
            <p>{userDetails.email}</p>
            {/* Display other user details here */}
          </div>
          
          <div className="dashboard-buttons">
        <button className="dashboard-button" onClick={() => navigate('/mytravellistenings')}>My Listenings</button>
        <button className="dashboard-button" onClick={() => navigate('/hirelistenings')}>Find Hires</button>
        <button className="dashboard-button" onClick={() => navigate('/alltravelerlistenings')}>Find Other Travel Listenings</button>
        <button className="dashboard-button" onClick={() => navigate('/mybooking')}>My Bookings</button>
      </div>
          
       
          <div className="create-travel-post">
            <h2>Create a Travel Post</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={travelPost.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Departure:
                <input
                  type="text"
                  name="departure"
                  value={travelPost.departure}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Arrival:
                <input
                  type="text"
                  name="arrival"
                  value={travelPost.arrival}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={travelPost.date}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Create Post</button>
            </form>
            {postingStatus && <p>{postingStatus}</p>}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TravelerDashboard;
