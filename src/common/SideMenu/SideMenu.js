import React, { useState } from "react"
import { Link } from "react-router-dom";
import { scaleDown as Menu } from 'react-burger-menu'
import "./SideMenu.scss"

export default function SideMenu(props){
  return(
    <div id="outer-container" className="app-container">
      <Menu
        isOpen={props.open}
        right
        scaleDown
        onStateChange={(state) => props.toggleMenu(state.menuOpen)}
        disableAutoFocus
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
        width={400}
        className={ "side-menu" }
      >

        {props.menuItems.map((item, i) => (
          <Link key={i} className="menu-item" to={item.route}>{item.label}</Link>
        ))}
      </Menu>
      <main id="page-wrap">
        {props.children}
      </main>

    </div>
  )
}
