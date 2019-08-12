import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cn from "classnames"
import "./header.scss"

import Button from "utils/button/button"
import logo from "./images/logo.svg"

function Header({ fixed = false }) {

  const classes = cn('header-container', {
    'fall-under': fixed === true
  })

  return(
    <div className={classes}>
      <ul className="header-links">
        <li className="header-link">
          <Link to="/home">
            <img src={logo} alt={logo} draggable="false" />
          </Link>
        </li>
        <li className="header-link">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="header-link">
          <Link to="/talent">
            Talent
          </Link>
        </li>
        <li className="header-link">
          <Link to="/process">
            Process
          </Link>
        </li>
        <li className="header-link">
          <Link to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
      <div className="header-action">
        <Button tag={Link} to="/contact" outline theme="light">Log In</Button>
      </div>
    </div>
  )
}

export default Header
