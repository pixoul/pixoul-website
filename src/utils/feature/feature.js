import React from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

const styles = theme => ({
  feature: {
    display: 'flex',
    flexDirection: props => {
      const positions = {
        'top-left': 'column',
        'top-center': 'column',
        'left': 'row'
      }
      return positions[props.position]
    },
    alignItems: props => {
      const positions = {
        'top-center': 'center',
        'left': 'flex-start'
      }
      return positions[props.position]
    },
    justifyContent: props => {
      const positions = {
        'top-left': 'flex-start',
        'top-center': 'center'
      }
      return positions[props.position]
    },
    textAlign: props => props.position === 'top-center' && 'center'
  },
  content: {

  },
  media: {
    padding: props => props.position === 'left' && '15px 30px 0 0'
  }
})

const Feature = ({
  title,
  icon,
  description,
  theme,
  classes
}) => {

  return (
    <div className={classes.feature}>
      <div className={classes.media}>
        {icon}
      </div>
      <div className={classes.content}>
        <Typography variant="p" color={theme === 'light' ? 'white': 'primary'} weight="bold" transform="uppercase">{title}</Typography>
        <Typography variant="p" color={theme === 'light' ? 'white': 'secondary'}>{description}</Typography>
      </div>
    </div>
  )
}

Feature.defaultProps = {
  position: 'top-left'
}

export default injectSheet(styles)(Feature)
