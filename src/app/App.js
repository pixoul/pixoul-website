import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.scss"

import Header from "layout/Header/Header"
import Footer from "layout/Footer/Footer"
import SideMenu from "layout/SideMenu/SideMenu"

/* Page Components */
import Home from "home/Home"
import About from "about/About"
import Capabilities from "capabilities/Capabilities"
import Work from "work/Work"
import Contact from "contact/Contact"

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
