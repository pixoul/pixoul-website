import React from "react"
import { useSpring, animated } from 'react-spring'

import logo from "./images/logo.svg"

const MenuBrand = ({
  media = logo
}) => {


  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)'
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0%, 0)'
    },
    delay: 500,
    config: {
      mass: 1,
      tension: 280,
      friction: 120
    }
  })

  return(
    <animated.div style={props} className="menu-brand">
      <img src={media} alt={media} className="menu-logo"/>
    </animated.div>
  )
}


export default MenuBrand
