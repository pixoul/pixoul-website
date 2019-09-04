import React, { useState } from "react"
import { useSpring, animated, config } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor"

const withAnimation = WrappedComponent => ({ ...props }) => {
  const [isVisible, setVisibility] = useState(false)

  const animation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isVisible ? 1 : 0
    },
    config: config.molasses
  })

  return (
    <VisibilitySensor partialVisibility onChange={(isVisible) => setVisibility(isVisible)}>
      <animated.div style={animation}>
        <WrappedComponent {...props}  />
      </animated.div>
    </VisibilitySensor>
  )
}


const Animate = ({
  children,
  delay = 100,
  partial = false
}) => {
  const [isVisible, setVisibility] = useState(false)
  const animation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isVisible ? 1 : 0
    },
    config: {
      tension: 280,
      friction: 120
    },
    delay: delay
  })

  return(
    <VisibilitySensor partialVisibility={partial} onChange={(isVisible) => setVisibility(isVisible)}>
      <animated.div style={animation}>
        {children}
      </animated.div>
    </VisibilitySensor>
  )
}

export { withAnimation, Animate }
