import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        login(user);  // Assuming `login` sets the user state in your AuthContext
        navigate('/');  // Navigate to the home page after successful login
      }
    } catch (error) {
      setLoginMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <section className="login_section">
      <div className="section_container">
        <h2 className="section_title">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
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
              placeholder="Enter your password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button" type="submit">Login</button>
          {loginMessage && <p className="error_message">{loginMessage}</p>}
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </section>
  );
}

export default Login;
