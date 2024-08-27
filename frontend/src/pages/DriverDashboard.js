import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DriverDashboard.css'; // Ensure the CSS file is properly named and imported

const DriverDashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch driver details
        const userDetailsResponse = await axios.get('http://localhost:3002/api/drivers/details', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage
          },
        });
        setUserDetails(userDetailsResponse.data);

        // Fetch driver profile picture
        const profilePicResponse = await axios.get('http://localhost:3002/api/drivers/profile-pic', {
          responseType: 'blob', // Handle image data
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage
          },
        });
        const profilePicUrl = URL.createObjectURL(profilePicResponse.data); // Create an object URL for the image
        setProfilePicUrl(profilePicUrl);
      } catch (error) {
        console.error('Error fetching driver data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="driver-dashboard">
  
      {userDetails ? (
        <div>
          <div className="profile-pic-container">
            <img
              src={profilePicUrl || '/default-profile-pic.png'} // Fallback image
              alt="Profile"
              className={profilePicUrl ? 'profile-pic' : 'fallback-img'}
            />
          </div>
          <div className="user-details">
            <h2>{userDetails.firstname} {userDetails.lastname}</h2>
            <p>ID: {userDetails.driverId}</p>
            <p>Email: {userDetails.email}</p>
            {/* Add more driver-specific details if available */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DriverDashboard;
