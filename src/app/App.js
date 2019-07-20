import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss"

import Header from "common/Header/Header"
import SideMenu from "common/SideMenu/SideMenu"
import Home from "home/Home"

export default function App(props) {

  const [open, toggleMenu] = useState(false);

  const menuItems = [
    {
      label: 'Home',
      route: '/home',
      component: Home
    }
  ]

  return (
    <div>
      <SideMenu open={open} toggleMenu={toggleMenu} menuItems={menuItems}>
        <Header toggleMenu={() => toggleMenu(!open)} />

        {menuItems.map((item, i) => (
          <Route key={i} path={item.route} component={item.component} />
        ))}

      </SideMenu>
    </div>
  );
}
