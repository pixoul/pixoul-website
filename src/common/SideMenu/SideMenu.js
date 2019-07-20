import React from "react"
import { Link } from "react-router-dom";

export default function SideMenu(props){
  return(
    <div className="menu-container">
      <Link className="menu-item" to='/aboutus#00' onClick={props.onMenuClose}>About</Link>
    </div>
  )
}
