import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function CafeList() {
  const [cafes, setCafes] = useState([]);
  const [cafeName, setCafeName] = useState('');
  const [cafeAddress, setCafeAddress] = useState('');
  const [cafeImage, setCafeImage] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchCafes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cafes", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCafes(response.data);
      } catch (error) {
        console.error('Error fetching cafes:', error);
      }
    };

    fetchCafes();
  }, [navigate]);

  const handleAddCafe = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append('name', cafeName);
    formData.append('address', cafeAddress);
    if (cafeImage) {
      formData.append('image', cafeImage);
    }

    try {
      await axios.post("http://localhost:3000/cafes", formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      // Refresh cafe list after adding
      const response = await axios.get("http://localhost:3000/cafes", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCafes(response.data);
      // Clear form
      setCafeName('');
      setCafeAddress('');
      setCafeImage(null);
    } catch (error) {
      console.error('Error adding cafe:', error);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div className="nav_logo">
            <Link to="/">
              <img src="/coffee_logo.png" alt="Coffee Logo" />
              <h2>Coffee Corner</h2>
            </Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
            <li><Link to="/cafes">Cafes</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      <section className="cafes_section" id="cafes">
        <div className="cafes_container">
          {user && user.accountType === 'storeManager' && (
            <div id="addCafeSection">
              <h3>Add a New Cafe (Store Managers Only)</h3>
              <form id="addCafeForm" onSubmit={handleAddCafe}>
                <div className="field">
                  <label htmlFor="cafeName">Cafe Name</label>
                  <input 
                    type="text" 
                    id="cafeName" 
                    placeholder="Enter cafe name" 
                    required 
                    value={cafeName}
                    onChange={(e) => setCafeName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cafeAddress">Cafe Address</label>
                  <input 
                    type="text" 
                    id="cafeAddress" 
                    placeholder="Enter cafe address" 
                    required 
                    value={cafeAddress}
                    onChange={(e) => setCafeAddress(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cafeImage">Upload Cafe Image</label>
                  <input 
                    type="file" 
                    id="cafeImage" 
                    accept="image/*" 
                    onChange={(e) => setCafeImage(e.target.files[0])}
                  />
                </div>
                <button className="button" type="submit">Add Cafe</button>
              </form>
            </div>
          )}
          <h2 className="section_title">Cafes</h2>
          <div id="cafesGrid" className="cafes-grid">
            {cafes.map(cafe => (
              <div key={cafe._id} className="cafe-card" onClick={() => navigate(`/cafes/${cafe._id}`)}>
                <h4>{cafe.name}</h4>
                <p>{cafe.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CafeList;
