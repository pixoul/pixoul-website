import React, { useState } from "react"
import { Link } from "react-router-dom";
import { scaleDown as Menu } from 'react-burger-menu'
import { Button } from "shards-react";

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
        noOverlay
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
        width={400}
        className={ "side-menu" }
      >

        {props.menuItems.map((item, i) => (
          <Link key={i} className="menu-item" to={item.route}>{item.label}</Link>
        ))}

        <div className="menu-footer">
          <div className="menu-cta">
            <Button squared theme="light">Contact Us</Button>
          </div>

          <ul className="list-unstyled">
            <li>&#169; 2019 Pixoul.  All rights reserved.</li>
            <li><ul className="list-inline">
              <li className="list-inline-item"><a>Privacy Policy</a></li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item"><a>Terms of Service</a></li>
            </ul></li>
          </ul>
        </div>
      </Menu>
      <main id="page-wrap">
        {props.children}
      </main>

    </div>
  )
}
