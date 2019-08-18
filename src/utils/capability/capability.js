import React from "react"
import "./capability.scss"
import cn from "classnames"

const Capability = ({
  title,
  subtitle,
  details = {},
  media,
  direction = 'rtl',
  background = direction === 'rtl' ? '#ffffff' : '#f9fafc',
  mediaComponent
}) => {

  const classes = cn('capability', {
    'rtl': direction === 'rtl',
    'ltr': direction === 'ltr'
  })

  return(
    <div className={classes} style={{ backgroundColor: background }} key={title}>
        <div className="capability-column capability-content">
            <div className="capability-title">{title}</div>
            <div className="capability-subtitle">{subtitle}</div>

            <div className="capability-details">
              {Object.keys(details).map(key => (
                <div className="capability-item" key={key}>
                  <span className="capability-item-title">{key}</span>
                  <span className="capability-item-tagline">{details[key]}</span>
                </div>
              ))}
            </div>
        </div>
        <div className="capability-column">
          <div className="capability-media">
            { mediaComponent ? mediaComponent
              :
              Array.isArray(media) ? media.map((item, i) => (<img key={i} src={item.image} alt={item.image} draggable="false" className="capability-image" width={item.width} height={item.height} />))
              : <img src={media.image} alt={media.image} draggable="false" className="capability-image" width={media.width} height={media.height} />}
          </div>
        </div>
    </div>
  )
}

export default Capability
