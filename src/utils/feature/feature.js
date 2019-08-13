import React from "react"
import "./feature.scss"

const Feature = ({
  title,
  media,
  description
}) => (
  <div className="feature">
    <div className="feature-media">
      <img src={media} alt={media} />
    </div>
    <div className="feature-content">
      <h4 className="feature-title">{title}</h4>
      <p className="feature-description">{description}</p>
    </div>
  </div>
)


export default Feature
