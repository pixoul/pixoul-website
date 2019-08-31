import React from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

const styles = theme => ({
  feature: {
    display: 'flex',
    alignItems: props => props.align
  },
  top: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: props => props.align
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
  media: {}
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
