import React from "react";
import { Link } from 'react-router-dom';

import "./menu.css";

const Menu = props => {
  return (
    <div className="menu">
      <Link className="menu-item" to='/'>Home</Link>
      <Link className="menu-item" to='/work'>Work</Link>
      <Link className="menu-item" to='/aboutus'>About</Link>
      <Link className="menu-item" to='/services'>Services</Link>
      <Link className="menu-item" to='/Blog'>Blog</Link>
    </div>
  );
};

export { Menu };
