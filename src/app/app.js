import React, { useState } from "react"
import { Route, Redirect, Switch, withRouter } from "react-router-dom"
import {useTransition, animated, config} from 'react-spring'
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

function App(props) {

  const [open, toggleMenu] = useState(false);

  const options = {
    from: {
      opacity: 0,
      // transform: 'translate3d(0,100%,0)'
    },
    enter: {
      opacity: 1,
      // transform: 'translate3d(0,0%,0)'
    },
    leave: {
      opacity: 0,
      // transform: 'translate3d(0,-100%,0)'
    }
  }

  const transitions = useTransition(props.location, location => location.pathname, options)

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
           {transitions.map(({ item, props, key }) => (
             <animated.div key={key} style={props}>
                  <Switch location={item}>
                      <Route path="/home" component={Home} />
                      <Route path="/work" component={Work} />
                      <Route path="/capabilities" component={Capabilities} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />

                      <Route exact path='/' render={props => (
                        <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
                      )}/>
                  </Switch>
              </animated.div>
            ))}
        <Footer />
      </SideMenu>
    </div>
  );
}

export default withRouter(App)
