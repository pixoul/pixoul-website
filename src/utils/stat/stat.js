import React, { useState } from "react"
import injectSheet from 'react-jss'
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor"

import Typography from "utils/typography/typography"

const styles = theme => ({
  stat: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: {
      left: 17.5,
      right: 17.5
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '50%'
  },
  circle:  {
    transition: 'stroke-dashoffset 0.35s',
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%'
  }
})

const Stat = ({
  value,
  symbol = "",
  unit="",
  description,
  decimal = 0,
  size = 300,
  stroke = 6,
  progress = 100,
  animateOnce = false,
  classes
}) => {
  const [isVisible, setVisibility] = useState(false)
  const [active, setActive] = useState(true)

  const radius = size / 2
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - progress / 100 * circumference;

  const animation = useSpring({
    x: isVisible ? strokeDashoffset : circumference,
    value: isVisible ? value : 0,
    from: {
      x: circumference,
      value: 0
    },
    config: {
      mass: 1,
      tension: 300,
      friction: 180
    },
    delay: 200
  })

  const performChange = isVisible => {
    if(animateOnce && isVisible){
      setActive(false)
    }
    setVisibility(isVisible)
  }

  return(
    <VisibilitySensor active={active} onChange={performChange}>
      <div className={classes.stat}>
        <svg height={size} width={size}>
          <circle
            r={ normalizedRadius }
            cx={ radius }
            cy={ radius }
            fill="none"
            stroke="#eeeeee"
            strokeWidth={ stroke }
            className={classes.circle}
          />
          <animated.circle
            stroke="#2e71f0"
            fill="transparent"
            strokeWidth={ stroke }
            strokeDasharray={ circumference + ' ' + circumference }
            strokeDashoffset={animation.x}
            r={ normalizedRadius }
            cx={ radius }
            cy={ radius }
            className={classes.circle}
           />
        </svg>

        <div className={classes.content}>
          <Typography variant="lead">
            {symbol}
            <animated.span>
              {animation.value.interpolate(val => val.toFixed(decimal))}
            </animated.span>
            {unit}
          </Typography>
          <Typography variant="caption">{description}</Typography>
        </div>
      </div>
    </VisibilitySensor>
)}

export default injectSheet(styles)(Stat)
