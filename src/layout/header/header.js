import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cn from "classnames"
import "./header.scss"

import HamburgerMenu from "utils/burger-menu/burger-menu"
import Button from "utils/button/button"

import { connect } from 'react-redux'
import { toggleMenu } from "layout/navigation/actions"

import logo from "./images/logo.svg"

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
        <li className="header-item header-link">
          <HamburgerMenu open={open} onClick={() => toggleMenu(!open)} />
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
