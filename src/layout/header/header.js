import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import cn from "classnames"
import "./header.scss"

import Button from "utils/button/button"
import logo from "./images/logo.svg"

function Header({ fixed = false }) {

  const [prevScrollPos] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(false)

  const classes = cn('header-container', {
    'fall-under': fixed === true,
    'hidden': visible === true
  })

  return(
    <div className={classes}>
      <ul className="header-links">
        <li className="header-link">
          <NavLink to="/home" activeClassName="active-link">
            <img src={logo} alt={logo} draggable="false" />
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink to="/talent" activeClassName="active-link">
            Talent
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink to="/process" activeClassName="active-link">
            Process
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink to="/faq" activeClassName="active-link">
            FAQ
          </NavLink>
        </li>
      </ul>
      <div className="header-action">
        <Button tag={Link} to="/contact" outline theme="light">Log In</Button>
      </div>
    </div>
  )
}

export default Header
