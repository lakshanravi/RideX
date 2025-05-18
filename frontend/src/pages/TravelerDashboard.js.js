import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TravelerDashboard.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const TravelerDashboard = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // New state for the selected file
  const [travelPost, setTravelPost] = useState({
    phone: '',
    departure: '',
    arrival: '',
    date: '',
  });
  const [postingStatus, setPostingStatus] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  // Handle file selection for profile pic upload
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload profile picture
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('profilePic', selectedFile);

    try {
      await axios.post('http://localhost:3002/api/users/uploadProfilePic', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reload the profile pic after successful upload
      const profilePicResponse = await axios.get('http://localhost:3002/api/users/profile-pic', {
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const newProfilePicUrl = URL.createObjectURL(profilePicResponse.data);
      setProfilePicUrl(newProfilePicUrl); // Update the profile picture
      alert('Profile picture uploaded successfully.');
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      alert('Failed to upload profile picture.');
    }
  };

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
      setIsPopupVisible(true); // Show popup on success
    } catch (error) {
      console.error('Error creating travel post:', error);
      setPostingStatus('Failed to create post.');
      setIsPopupVisible(true); // Show popup on error
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
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

          {/* Upload Profile Picture Form */}
          <div className="upload-profile-pic">
            <form onSubmit={handleUpload}>
              <label htmlFor="profilePic">Upload Profile Picture:</label>
              <input type="file" id="profilePic" onChange={handleFileChange} />
              <button type="submit">Upload</button>
            </form>
          </div>

          <div className="user-details">
            <h2>{userDetails.firstname} {userDetails.lastname}</h2>
            <p>ID: {userDetails.userId}</p>
            <p>{userDetails.email}</p>
          </div>

          <div className="dashboard-buttons">
            <button className="dashboard-button" onClick={() => navigate('/mytravellistenings')}>My Listenings</button>
            {/* <button className="dashboard-button" onClick={() => navigate('/hirelistenings')}>Find Hires</button> */}
            {/* <button className="dashboard-button" onClick={() => navigate('/alltravelerlistenings')}>Find Other Travel Listenings</button> */}
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
          </div>

          {/* Popup for displaying posting status */}
          {isPopupVisible && (
            <div className="popup">
              <div className="popup-content">
                <p>{postingStatus}</p>
                <button onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TravelerDashboard;
