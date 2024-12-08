import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CafeDetails() {
  const [cafe, setCafe] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchCafeDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/cafes/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCafe(response.data);
      } catch (error) {
        console.error('Error fetching cafe details:', error);
      }
    };

    fetchCafeDetails();
  }, [id]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    try {
      const newReview = { 
        reviewer: loggedInUser.username, 
        text: reviewText, 
        rating: parseFloat(reviewRating) 
      };
      await axios.post(`http://localhost:3000/cafes/${id}/review`, newReview, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      window.location.reload();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (!cafe) return <div>Loading...</div>;

  return (
    <div>
      <header className="cafe-header">
        <h2>{cafe.name}</h2>
      </header>
      
      <section className="cafe-details" id="cafeDetails">
        <div className="cafe-info">
          {cafe.image && <img src={cafe.image} alt={cafe.name} className="cafe-image"/>}
          <p className="cafe-address">Address: {cafe.address}</p>
        </div>

        <div className="cafe-reviews">
          <h3>Reviews</h3>
          <ul className="reviews-list">
            {cafe.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.reviewer}</strong>: {review.text} (Rating: {review.rating}/10)
              </li>
            ))}
          </ul>
        </div>
      </section>

      {JSON.parse(localStorage.getItem("user"))?.accountType === "customer" && (
        <section className="review-section">
          <h3>Add a Review</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="field">
              <label htmlFor="reviewText">Review</label>
              <textarea 
                id="reviewText" 
                required 
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>
            <div className="field">
              <label htmlFor="reviewRating">Rating (1-10)</label>
              <input 
                type="number" 
                id="reviewRating" 
                min="1" 
                max="10" 
                required 
                value={reviewRating}
                onChange={(e) => setReviewRating(e.target.value)}
              />
            </div>
            <button className="button" type="submit">Submit Review</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default CafeDetails;