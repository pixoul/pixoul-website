import React from "react"
import "./feature.scss"
/* Third-Party */
import cn from "classnames"

const Feature = ({
  title,
  media,
  description,
  position = 'top-left'
}) => {

  const classes = cn('feature', {
    'top-left': position === 'top-left',
    'top-center': position === 'top-center',
    'left': position === 'left'
  })

  return (
    <div className={classes}>
      <div className="feature-media">
        <img src={media} alt={media} />
      </div>
      <div className="feature-content">
        <h4 className="feature-title">{title}</h4>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  )
}

export default Feature
