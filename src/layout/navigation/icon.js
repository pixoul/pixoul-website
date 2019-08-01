import React from "react"
import { useSpring, animated } from 'react-spring'

import close from "./images/close.svg"

const MenuIcon = ({
  onClick
}) => {

  const [props, set] = useSpring(() => ({
    from: {
      opacity: 0,
      xyz: [0, 0, 0]
    },
    to: {
      opacity: 1,
      xyz: [0, 0, 1]
    },
    delay: 300,
    config: {
      mass: 1,
      tension: 280,
      friction: 120
    }
  }))

  const trans = (x, y, z) => `perspective(600px) translate(${x}px,${y}px) scale(${z})`

  return(
    <animated.button
      style={{
        transform: props.xyz.interpolate(trans),
        opacity: props.opacity
      }}
      className="menu-close"
      onClick={onClick}
      onMouseEnter={() => set({ xyz: [0, 0, 1.2] })}
      onMouseLeave={() => set({ xyz: [0, 0, 1] })}
    >
        <img src={close} alt={close} />
    </animated.button>
  )
}


export default MenuIcon
