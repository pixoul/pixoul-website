import React, { useState } from "react";
import "./App.scss"

import Header from "common/Header/Header"
import SideMenu from "common/SideMenu/SideMenu"
import Home from "home/Home"

export default function App(props) {

  const [open, toggleMenu] = useState(false);

  return (
    <div>
      <SideMenu open={open} toggleMenu={toggleMenu}>
        <Header toggleMenu={() => toggleMenu(!open)} />
        <Home />
      </SideMenu>
    </div>
  );
}
