import React from 'react';
import { Link } from "react-router-dom";
import cn from "classnames"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "shards-react";
import "./header.scss"

import { connect } from 'react-redux'
import { toggleMenu } from "layout/navigation-menu/actions"

import logo from "./images/logo.svg"
import menu from "./images/menu.svg"

function Header({ fixed = false, open, toggleMenu }) {

  const classes = cn('header-container', {
    'fall-under': fixed === true
  })

  return (
    <div className={classes}>
      <Navbar type="light" expand="md">
        <NavbarBrand href="#"><img src={logo} alt={logo} draggable="false" /></NavbarBrand>
        <Nav className="ml-auto align-items-center">
          <NavItem>
            <Button outline tag={Link} to="/contact">Contact Us</Button>
          </NavItem>
          <NavItem>
            <NavLink className="menu-icon" onClick={() => toggleMenu(!open)} ><img src={menu} alt={menu} draggable="false" /></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    open: state.menu.open
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
