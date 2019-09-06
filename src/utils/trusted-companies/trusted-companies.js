import React, { useState } from "react"
import injectSheet from 'react-jss'
import { useTrail, animated } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor"
/* Utils */
import Typography from "utils/typography/typography"
/* Images */
import disney from "./images/disney.svg"
import airbnb from "./images/airbnb.svg"
import amazon from "./images/amazon.svg"
import gp from "./images/gp.svg"
import kw from "./images/kw.svg"
const images = [disney, airbnb, amazon, gp, kw]

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: {
      top: 84,
      right: 0,
      bottom: 84,
      left: 0
    },
    '& img' : {
      padding: 30,
      filter: props => props.light ? 'opacity(0.2)' : 'none'
    }
  },
  '@media (max-width: 768px)': {
    media: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: {
        top: 30,
        right: 0,
        bottom: 40,
        left: 0
      },
      '& img': {
        width: '30%'
      }
    }
  }
})

const TrustedCompanies = ({
  title,
  classes,
  animateOnce
}) => {
  const [isVisible, setVisibility] = useState(false)
  const [active, setActive] = useState(true)

  const performChange = isVisible => {
    if(animateOnce && isVisible){
      setActive(false)
    }
    setVisibility(isVisible)
  }

  const trail = useTrail(images.length, {
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 300,
    from: {
      opacity: 0,
      x: 20
    },
    config: {
      tension: 280,
      friction: 60
    }
  })

  return (
    <VisibilitySensor active={active} onChange={performChange} partialVisibility>
      <div className={classes.root}>
          <Typography variant="subtitle2" align="center">{title}</Typography>
          <div className={classes.media}>
            {trail.map(({ x, ...rest }, index) => (
                <animated.img
                  key={index}
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`)}}
                  src={images[index]}
                  alt={images[index]}
                />
            ))}
          </div>
      </div>
    </VisibilitySensor>
  )
}

TrustedCompanies.defaultProps = {
  title: 'Our Talent Network has Worked For Companies Like:',
  light: false
}

export default injectSheet(styles)(TrustedCompanies)
