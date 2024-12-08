import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav_logo">
          <Link to="/">
            <img src="/coffee_logo.png" alt="Coffee Logo" />
            <h2>Coffee Corner</h2>
          </Link>
        </div>

        <input type="checkbox" id="click" />
        <label htmlFor="click">
          <i className="menu_btn bx bx-menu"></i>
          <i className="close_btn bx bx-x"></i>
        </label>

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
  );
}

export default Header;
