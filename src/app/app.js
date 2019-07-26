import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import "./app.scss"

import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import SideMenu from "layout/side-menu/side-menu"

/* Page Components */
import Home from "home/home"
import About from "about/about"
import Capabilities from "capabilities/capabilities"
import Strategy from "capabilities/strategy/strategy"
import Design from "capabilities/design/design"
import Technology from "capabilities/technology/technology"
import Work from "work/work"
import Contact from "contact/contact"

import IuzeitDetail from "work/iuzeit/detail"
import GeorgiaPacificDetail from "work/georgia-pacific/detail"
import SofsDetail from "work/sofs/detail"
import FusemapDetail from "work/fusemap/detail"

function App(props) {

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

        <Route render={({ location }) => (
            <Switch location={location} key={location.key}>
              {menuItems.map((item, i) => (
                <Route exact key={i} path={item.route} component={item.component} />
              ))}

              <Route exact path="/capabilities/strategy" component={Strategy} />
              <Route exact path="/capabilities/design" component={Design} />
              <Route exact path="/capabilities/technology" component={Technology} />
              <Route exact path="/contact" component={Contact}/>

              <Route exact path="/work/detail/iuzeit" component={IuzeitDetail} />
              <Route exact path="/work/detail/georgia-pacific" component={GeorgiaPacificDetail} />
              <Route exact path="/work/detail/sofs" component={SofsDetail} />
              <Route exact path="/work/detail/fusemap" component={FusemapDetail} />

              <Route exact path='/' render={props => (
                <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
              )}/>
            </Switch>
          )}
        />


        <Footer />
      </SideMenu>
    </div>
  );
}

export default withRouter(App)
