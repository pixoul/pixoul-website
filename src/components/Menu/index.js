import React from "react";
import { Link } from 'react-router-dom';

import "./menu.css";

const Menu = props => {
  return (
    <div className="menu-container">
      <div className="menu">
        <Link className="menu-item" to='/'>Home</Link>
        <Link className="menu-item" to='/work'>Work</Link>
        <Link className="menu-item" to='/aboutus'>About</Link>
        <Link className="menu-item" to='/services'>Services</Link>
        <Link className="menu-item" to='/blog'>Blog</Link>
        <div className="menu-contact-section">
          <p>(616) 914-9356</p>
          <p>hello@pixoulagency.com</p>
        </div>
        <a className="menu-contact-button" href="#Contact"><div>Contact Us</div></a>
        
        <div className="menu-link-section">
          <div>&copy; 2019 Pixoul. All rights reserved.</div>
          <Link className="small-menu-item" to='/privacy-policy'>Privacy Policy</Link> | <Link className="small-menu-item" to='/tos'>Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export { Menu };
