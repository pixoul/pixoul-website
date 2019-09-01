import React from "react"
import injectSheet from 'react-jss'
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
  description,
  size = 300,
  stroke = 6,
  progress = 100,
  classes
}) => {

  const radius = size / 2
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return(
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
        <circle
          stroke="#2e71f0"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
          className={classes.circle}
         />
      </svg>

      <div className={classes.content}>
        <Typography variant="lead">{value}</Typography>
        <Typography variant="caption">{description}</Typography>
      </div>
    </div>
  )
}

export default injectSheet(styles)(Stat)
