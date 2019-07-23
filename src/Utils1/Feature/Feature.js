import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import "./Feature.scss"

export default function Feature(props){
  const { title = "Feature", tagline = "This is a feature.", actionLink = "#", actionText = "Learn More", icon = faInfo} = props

  return(
    <div className="shards-feature">
      <div className="feature-media">
        <FontAwesomeIcon icon={icon} className="feature-icon" />
        <h6 className="feature-title">{title}</h6>
      </div>
      <small className="feature-tagline">{tagline}</small>
      <Link to={actionLink} className="feature-action">
        <small>
          <strong>{actionText} <FontAwesomeIcon icon={faLongArrowAltRight} /></strong>
        </small>
      </Link>
    </div>
  )
}
