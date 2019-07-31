import React from "react"
import "./capability.scss"
import cn from "classnames"

const Capability = ({ title, subtitle, details = {}, media, direction = 'rtl' }) => {

  const classes = cn('capability', {
    'rtl': direction === 'rtl',
    'ltr': direction === 'ltr'
  })


  return(
    <div className={classes}>
        <div className="capability-column">
          <div className="capability-content">
            <div className="capability-title">{title}</div>
            <div className="capability-subtitle">{subtitle}</div>

            <div className="capability-details">
              {Object.keys(details).map(key => (
                <div className="capability-item">
                  <span className="capability-item-title">{key}</span>
                  <span className="capability-item-tagline">{details[key]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="capability-column">
          <div className="capability-media">
            <img src={media} alt={media} draggable="false" className="capability-image" />
          </div>
        </div>
    </div>
  )
}

export default Capability
