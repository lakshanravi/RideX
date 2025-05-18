import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyReview.css';

const MyReview = () => {
  const [myreviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchMyReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/review/getReviewsForDriver', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token from local storage or context
          },
        });
        setMyReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyReviews();
  }, []);

 

  

  return (
    <div className="myreview-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="myreview-list">
          {myreviews.length > 0 ? (
            myreviews.map((myreview) => (
              <div key={myreview._id} className="myreview-item">
                 <div className="myreview-details">
                <h3>
                  Reviewer: {myreview.reviewer?.firstname} 
                </h3>
                <p>
                  <strong>Rating:</strong> {myreview.rating}
                </p>
                <p>
                  <strong>Comment:</strong> {myreview.reviewText} 

                </p>
                <p>
                  <strong>Email:</strong> {myreview.reviewer?.email} 
                  
                </p>
                <p>
                  <strong>Date:</strong> {new Date(myreview.createdAt).toLocaleDateString()}
                </p>
               
              </div>

                
              </div>
            ))
          ) : (
            <p>No Reviews found.</p>
          )}
        </div>
      )}



     
    </div>
  );
};

export default MyReview;
