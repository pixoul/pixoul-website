import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cn from "classnames"
import "./header.scss"

import Button from "utils/button/button"

import { connect } from 'react-redux'
import { toggleMenu } from "layout/navigation/actions"

import logo from "./images/logo.svg"
import menu from "./images/menu.svg"
import menuHover from "./images/menu-hover.svg"

function Header({ fixed = false, open, toggleMenu }) {

  const classes = cn('header-container', {
    'fall-under': fixed === true
  })

  const [hover, setHover] = useState(false)

  return(
    <div className={classes}>
      <div className="header-brand">
        <Link to="/home">
          <img src={logo} alt={logo} draggable="false" />
        </Link>
      </div>
      <ul className="header-items">
        <li className="header-item">
          <Button tag={Link} to="/contact" outline>Contact Us</Button>
        </li>
        <li className="header-item">
          <button
            className="header-link"
            onClick={() => toggleMenu(!open)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? <img src={menuHover} alt={menuHover} draggable="false" /> : <img src={menu} alt={menu} draggable="false" />}
          </button>
        </li>
      </ul>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    open: state.navigation.open
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleMenu: (open) => {
      dispatch(toggleMenu(open))
    }
  }
}

const HeaderToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderToggle
