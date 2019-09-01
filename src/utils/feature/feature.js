import React from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

const styles = theme => ({
  feature: {
    display: 'flex',
    alignItems: props => props.align,
    margin: {
      top: 14,
      right: 28,
      bottom: 14,
      left: 28
    }
  },
  top: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: props => props.align,
    margin: {
      top: 14,
      right: 0,
      bottom: 14,
      left: 0
    }
  },
  bottom: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    textAlign: props => props.align
  },
  left: {
    flexDirection: 'row',
    "& $media": {
      padding: {
        top: 20,
        right: 30
      }
    }
  },
  right: {
    flexDirection: 'row-reverse',
    "& $media": {
      padding: {
        top: 20,
        right: 30
      }
    }
  },
  content: {},
  media: {},
  '@media (max-width: 768px)': {
    feature: {
      margin: {
        top: 11,
        right: 0,
        bottom: 11,
        left: 0
      }
    }
  }
})

const Feature = ({
  title,
  icon,
  description,
  theme,
  position,
  classes,
  shrink
}) => {

  return (
    <div className={classes.feature + ' ' + classes[position]}>
      <div className={classes.media}>
        {icon}
      </div>
      <div className={classes.content}>
        <Typography variant="subtitle2" color={theme === 'light' ? 'white': 'primary'}>{title}</Typography>
        <Typography variant={shrink ? "body2" : "body1"} color={theme === 'light' ? 'white': 'secondary'}>{description}</Typography>
      </div>
    </div>
  )
}

Feature.defaultProps = {
  position: 'top',
  align: 'flex-start'
}

export default injectSheet(styles)(Feature)
