import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "shards-react";
import "./Header.scss"

import logo from "images/logo.png"
import menu from "images/menu.svg"

export default function Header(props) {
  return (
    <div className="header-container">
      <Navbar type="light" expand="md" theme="transparent">
        <NavbarBrand href="#"><img src={logo} /></NavbarBrand>
        <Nav className="ml-auto align-items-center">
          <NavItem>
            <Button outline >Contact Us</Button>
          </NavItem>
          <NavItem>
            <NavLink className="menu-icon" onClick={props.toggleMenu} ><img src={menu} /></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
