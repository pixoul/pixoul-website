import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import cn from "classnames"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "shards-react";
import "./header.scss"

import logo from "images/logo.png"
import menu from "images/menu.svg"

function Header(props) {

  const [fallUnder, setFallUnder] = useState(false);

  const classes = cn('header-container', {
    'fall-under': fallUnder
  })

  function evaluateHeader(path){
    if(path === '/home' || path === '/work'){
      setFallUnder(true)
    }else{
      setFallUnder(false)
    }
  }

  useEffect(() => {
    props.history.listen((location, action) => evaluateHeader(location.pathname));
    console.log(props.location)
    evaluateHeader(props.location.pathname)
  })

  return (
    <div className={classes}>
      <Navbar type="light" expand="md">
        <NavbarBrand href="#"><img src={logo} /></NavbarBrand>
        <Nav className="ml-auto align-items-center">
          <NavItem>
            <Button outline tag={Link} to="/contact">Contact Us</Button>
          </NavItem>
          <NavItem>
            <NavLink className="menu-icon" onClick={props.toggleMenu} ><img src={menu} /></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default withRouter(Header)
