import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import "./app.scss"

import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import SideMenu from "layout/side-menu/side-menu"

/* Page Components */
import Home from "home/home"
import About from "about/about"
import Capabilities from "capabilities/capabilities"
import Work from "work/work"
import Contact from "contact/contact"

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
      component: Work
    },
    {
      label: 'Capabilities',
      route: '/capabilities',
      component: Capabilities
    },
    {
      label: 'About',
      route: '/about',
      component: About
    }
  ]

  return (
    <div>
      <SideMenu open={open} toggleMenu={toggleMenu} menuItems={menuItems}>
        <Header toggleMenu={() => toggleMenu(!open)} />

        {menuItems.map((item, i) => (
          <Route key={i} path={item.route} component={item.component} />
        ))}

        <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
        <Route exact path="/contact" component={Contact}/>

        <Footer />
      </SideMenu>
    </div>
  );
}
