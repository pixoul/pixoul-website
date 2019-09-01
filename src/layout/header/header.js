import React, { useState, useEffect } from 'react';
import Headroom from "react-headroom"
import { NavLink, Link } from "react-router-dom";
import cn from "classnames"
import "./header.scss"

import Typography from "utils/typography/typography"
import Button from "utils/button/button"
import logo from "./images/logo.svg"

const Header = () => (
    <Headroom>
      <div className="header-container shadow">
        <div className="header-links">
          <NavLink to="/home" activeClassName="active-link">
            <img src={logo} alt={logo} draggable="false" />
          </NavLink>
          <Typography variant="body2" color="primary" component={NavLink} to={'/about'} activeClassName="active-link">
              About
          </Typography>
          <Typography variant="body2" color="primary" component={NavLink}to={'/talent' }activeClassName="active-link">
              Talent
          </Typography>
          <Typography variant="body2" color="primary" component={NavLink} to={'/process'} activeClassName="active-link">
              Process
          </Typography>
          <Typography variant="body2" color="primary" component={NavLink} to={'/faq'} activeClassName="active-link">
              FAQ
          </Typography>
        </div>
        <div className="header-action">
          <Button component={Link} to="/contact" outline theme="secondary">Log In</Button>
        </div>
      </div>
  </Headroom>
)

export default Header
