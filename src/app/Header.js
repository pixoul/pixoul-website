import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "shards-react";

import logo from "images/logo.svg"

export default function Header() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <Navbar type="light" expand="md">
      <NavbarBrand href="#"><img src={logo} /></NavbarBrand>
      <Nav className="ml-auto">
        <NavItem>
          <Button outline>Contact Us</Button>
        </NavItem>
        <NavItem>

        </NavItem>
      </Nav>
    </Navbar>
  );
}
