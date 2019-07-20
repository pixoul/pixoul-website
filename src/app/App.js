import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss"

import Header from "common/Header/Header"
import Footer from "common/Footer/Footer"
import SideMenu from "common/SideMenu/SideMenu"
import Home from "home/Home"

export default function App(props) {

  const [open, toggleMenu] = useState(false);

  const menuItems = [
    {
      label: 'Home',
      route: '/home',
      component: Home
    },
    {
      label: 'Work',
      route: '/work',
      component: Home
    },
    {
      label: 'Capabilities',
      route: '/capabilities',
      component: Home
    },
    {
      label: 'About',
      route: '/about',
      component: Home
    },
    {
      label: 'Blog',
      route: '/blog',
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

        <Footer />
      </SideMenu>
    </div>
  );
}
