import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="section_container">
        <div className="footer_section">
          <div className="footer_logo">
            <Link to="/">
              <img src="/coffee_logo.png" alt="Coffee Logo" />
              <h2>Coffee Corner</h2>
            </Link>
          </div>

          <div className="useful_links">
            <h3>Useful Links</h3>
            <ul>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/cafes">Cafes</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          <div className="contact_us">
            <h3>Contact</h3>
            <ul>
              <li>
                <i className="bx bx-current-location"></i>
                <span>Ontario, Canada</span>
              </li>
              <li>
                <i className="bx bxs-phone-call"></i> <span>+1 9272823912</span>
              </li>
              <li>
                <i className="bx bxs-time-five"></i>
                <span>Mon-Sun : 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="follow_us">
            <h3>Follow</h3>
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram-alt"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
