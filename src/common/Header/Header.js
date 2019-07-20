import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "shards-react";

import logo from "images/logo.png"
import menu from "images/menu.svg"

export default function Header() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <Navbar type="light" expand="md" theme="transparent">
      <NavbarBrand href="#"><img src={logo} /></NavbarBrand>
      <Nav className="ml-auto align-items-center">
        <NavItem>
          <Button outline >Contact Us</Button>
        </NavItem>
        <NavItem>
          <NavLink href="#" ><img src={menu} /></NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
