import React from "react"
import MenuIcon from "./icon"

const MenuContainer = ({ children }) => {
  return(
    <div className="menu-container background">
      <MenuIcon />
      <div className="menu-content lg-device">
      { children }
      </div>
    </div>
  )
}

export default MenuContainer
