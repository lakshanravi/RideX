import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DriverDashboard.css'; // Ensure the CSS file is properly named and imported
import { useNavigate } from 'react-router-dom';
import hirePostImage from '../assets/images/im11.jpg'; // Adjust the path according to your directory structure

const DriverDashboard = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // New state for the selected file
  const [hirePost, setHirePost] = useState({
    departure: '',
    arrival: '',
    description: '',
    vehicleType: '',
    noOfSeats: 1,
    seatPrice: 0,
    departureTime: '',
    date: '',
  });
  const [postingStatus, setPostingStatus] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDetailsResponse = await axios.get('http://localhost:3002/api/drivers/details', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserDetails(userDetailsResponse.data);

        const profilePicResponse = await axios.get('http://localhost:3002/api/drivers/profile-pic', {
          responseType: 'blob',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const profilePicUrl = URL.createObjectURL(profilePicResponse.data);
        setProfilePicUrl(profilePicUrl);
      } catch (error) {
        console.error('Error fetching driver data:', error);
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
      await axios.post('http://localhost:3002/api/drivers/uploadProfilePic', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reload the profile pic after successful upload
      const profilePicResponse = await axios.get('http://localhost:3002/api/drivers/profile-pic', {
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
    setHirePost({ ...hirePost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/api/hire/createhire', hirePost, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPostingStatus('Hire post created successfully!');
      setHirePost({
        departure: '',
        arrival: '',
        description: '',
        vehicleType: '',
        noOfSeats: 1,
        seatPrice: 0,
        departureTime: '',
        date: '',
      }); // Clear form fields after submission
      setIsPopupVisible(true); // Show popup on success
    } catch (error) {
      console.error('Error creating hire post:', error);
      setPostingStatus('Failed to create post.');
      setIsPopupVisible(true); // Show popup on error
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

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
            <p>ID: {userDetails.driverId}</p>
            <p>Email: {userDetails.email}</p>
          </div>

          <div className="dashboard-buttons">
            <button className="dashboard-button" onClick={() => navigate('/myhire')}>My Hires</button>
            {/* <button className="dashboard-button" onClick={() => navigate('/alltravelerlistenings')}>Find Travel Listenings</button> */}
            <button className="dashboard-button" onClick={() => navigate('/mybookingbydriver')}>Bookings</button>
            <button className="dashboard-button" onClick={() => navigate('/myreview')}>My Reviews</button>
          </div>

          <div className="create-hire-post-container">
            <div className="create-hire-post-form">
              <h2>Create a Hire Post</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Departure:
                  <input
                    type="text"
                    name="departure"
                    value={hirePost.departure}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Arrival:
                  <input
                    type="text"
                    name="arrival"
                    value={hirePost.arrival}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={hirePost.description}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Vehicle Type:
                  <input
                    type="text"
                    name="vehicleType"
                    value={hirePost.vehicleType}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Number of Seats:
                  <input
                    type="number"
                    name="noOfSeats"
                    value={hirePost.noOfSeats}
                    onChange={handleInputChange}
                    min="1"
                    required
                  />
                </label>
                <label>
                  Seat Price:
                  <input
                    type="number"
                    name="seatPrice"
                    value={hirePost.seatPrice}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </label>
                <label>
                  Departure Time:
                  <input
                    type="text"
                    name="departureTime"
                    value={hirePost.departureTime}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Date:
                  <input
                    type="date"
                    name="date"
                    value={hirePost.date}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button type="submit">Create Post</button>
              </form>
            </div>
            <div className="create-hire-post-image">
              <img src={hirePostImage} alt="Hire Post" />
            </div>
          </div>

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

export default DriverDashboard;
