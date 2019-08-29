import React from "react"
import "./feature.scss"
/* Third-Party */
import injectSheet from 'react-jss'
import cn from "classnames"
import Typography from "utils/typography/typography"

const styles = theme => ({
  feature: {
    display: 'flex'
  },
  content: {

  },
  media: {

  }
})

const Feature = ({
  title,
  icon,
  description,
  position = 'top-left',
  theme = 'dark'
}) => {

  const classes = cn('feature', {
    'top-left': position === 'top-left',
    'top-center': position === 'top-center',
    'left': position === 'left',
    'light': theme === 'light',
    'dark' : theme === 'dark'
  })

  return (
    <div className={classes}>
      <div className="feature-media">
        {icon}
      </div>
      <div className="feature-content">
        <Typography variant="p" color="primary" weight="bold" transform="uppercase">{title}</Typography>
        <Typography variant="p" color="secondary">{description}</Typography>
      </div>
    </div>
  )
}

Feature.defaultProps = {

}

export default injectSheet(styles)(Feature)
