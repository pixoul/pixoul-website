import React from "react"
import { Link } from "react-router-dom";
import { useTransition, animated } from 'react-spring'

const MenuItems = ({ items }) => {

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
          <Link className="menu-link" to={item.route}>{item.label}</Link>
        </animated.li>
      ))}
    </ul>
  )
}

export default MenuItems
