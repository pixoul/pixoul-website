import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import "./feature.scss"


function FeatureTagline(props){
  return(
    <small className="feature-tagline">{props.text}</small>
  )
}

function FeatureAction(props){

  const styles = {
    fontSize: props.size ? props.size : 20,
    color: props.color ? props.color : '#2ec986'
  }

  return(
    <Link to={props.link} className="feature-action" style={styles}>
      <small>
        <strong>{props.text} <FontAwesomeIcon icon={faLongArrowAltRight} /></strong>
      </small>
    </Link>
  )
}

function FeatureTitle(props){

  const styles = {
    fontSize: props.size ? props.size : 20,
    color: props.color ? props.color : '#000000'
  }

  return(
    <h6 className="feature-title" style={styles}>{props.text}</h6>
  )
}

function FeatureIcon(props){
  return(
    <FontAwesomeIcon icon={props.icon} className="feature-icon" />
  )
}

function FeatureHeader(props){
  return(
    <div className="feature-media">
      {props.children}
    </div>
  )
}

export default function Feature(props){
  const { title = "Feature", tagline = "This is a feature.", actionLink = "#", actionText = "Learn More", icon = faInfo} = props

  return(
    <div className="feature">
      {props.children}
    </div>
  )
}


export {
  Feature,
  FeatureHeader,
  FeatureTitle,
  FeatureIcon,
  FeatureTagline,
  FeatureAction
}
