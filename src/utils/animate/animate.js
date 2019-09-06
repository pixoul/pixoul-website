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
  partial = false,
  once = false,
  type = 'fade'
}) => {
  const [isVisible, setVisibility] = useState(false)
  const [active, setActive] = useState(true)

  const animation = useSpring({
    from: generateProps(type, isVisible),
    to: generateProps(type, isVisible),
    config: {
      tension: 280,
      friction: 120
    },
    delay: delay
  })

  const performChange = isVisible => {
    if(once && isVisible) {
      setActive(false)
    }

    setVisibility(isVisible)
  }

  return(
    <VisibilitySensor active={active} partialVisibility={partial} onChange={performChange}>
      <animated.div style={animation}>
        {children}
      </animated.div>
    </VisibilitySensor>
  )
}

const generateProps = (type = 'fade', isVisible) => {
  const styles = {
    'fade': {
      opacity: isVisible ? 1 : 0
    },
    'slideLeft': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0px,0px,0px)' : 'translate3d(400px,0px,0px)'
    },
    'slideUp': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0px,0px,0px)' : 'translate3d(0px,400px,0px)'
    }
  }
  return styles[type]
}

export { withAnimation, Animate }
