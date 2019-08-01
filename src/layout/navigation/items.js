import React from "react"
import { NavLink } from "react-router-dom";
import { useTransition, animated } from 'react-spring'

const MenuItems = ({ items, children }) => {

  const transitions = useTransition(items, item => item.route, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0%, 0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)'
    },
    trail: 250
  })


  return(
    <ul className="menu-items">
      {transitions.map(({ item, key, props }) => (
        <animated.li key={key} style={props} className="menu-item">
          <NavLink className="menu-link" to={item.route} activeClassName="link-active">{item.label}</NavLink>
        </animated.li>
      ))}
      { children }
    </ul>
  )
}

export default MenuItems
