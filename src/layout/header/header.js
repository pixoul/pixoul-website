import React, { useState, useEffect } from 'react';
import Headroom from "react-headroom"
import { NavLink, Link } from "react-router-dom";
import cn from "classnames"
import "./header.scss"

import Button from "utils/button/button"
import logo from "./images/logo.svg"

const Header = () => (
    <Headroom>
      <div className="header-container shadow">
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
  </Headroom>
)

export default Header
