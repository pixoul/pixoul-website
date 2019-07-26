import React, { useState } from "react"
import "./app.scss"

import SideMenu from "layout/side-menu/side-menu"
import Routes from "./routes"

function App(props) {

  const [open, toggleMenu] = useState(false);

  const menuItems = [
    {
      label: 'Home',
      route: '/home'
    },
    {
      label: 'Work',
      route: '/work'
    },
    {
      label: 'Capabilities',
      route: '/capabilities'
    },
    {
      label: 'About',
      route: '/about'
    }
  ]

  return (
    <div>
      <SideMenu open={open} toggleMenu={toggleMenu} menuItems={menuItems}>
           <Routes />
      </SideMenu>
    </div>
  );
}

export default App
