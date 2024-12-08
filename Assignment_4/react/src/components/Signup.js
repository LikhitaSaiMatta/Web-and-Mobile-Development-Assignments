import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setSignupMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        username,
        password,
        accountType
      });

      if (response.status === 201) {
        setSignupMessage("Signup successful!");
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setAccountType('');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      setSignupMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup_section">
      <form onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        
        <div className="field">
          <label htmlFor="userid">Username</label>
          <input 
            type="text" 
            id="userid" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            required 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="accountType">Account Type</label>
          <select 
            id="accountType" 
            required 
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="">Select Account Type</option>
            <option value="customer">Customer</option>
            <option value="storeManager">Store Manager</option>
          </select>
        </div>

        <button type="submit" className="button">Sign Up</button>
      </form>
      {signupMessage && <p>{signupMessage}</p>}
    </div>
  );
}

export default Signup;
