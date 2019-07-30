import React from "react"
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  return(
    <ul className="menu-items">
      {items.map((item, i) => (
        <li className="menu-item">
          <Link key={i} className="menu-link" to={item.route}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuItems
