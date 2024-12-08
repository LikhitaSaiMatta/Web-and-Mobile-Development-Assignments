import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CafeList from './components/CafeList';
import CafeDetails from './components/CafeDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import aboutCoffee from './images/about_coffee.png';
import coffeeLogo from './images/coffee_logo.png';
import coffeeImage from './images/coffee_image.png';


function App() {
  return (
    <AuthProvider>
      <Router> 
        <div className="App">
          <Header />
            <img src={aboutCoffee} alt="About Coffee" />
            <img src={coffeeLogo} alt="Coffee Logo" />
            <img src={coffeeImage} alt="Coffee" />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cafes" element={<CafeList />} />
              <Route path="/cafes/:id" element={<CafeDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
              path="/add-cafe"
              element={
                <ProtectedRoute requiredRole="storeManager">
                  <AddCafe />
                </ProtectedRoute>
              }
            />
            </Routes>
            <Footer />
          </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
