import React from "react"
import cn from "classnames"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import "./feature.scss"
import arrow from "./images/green-arrow.svg"

function FeatureTagline(props){

  const styles = {
    fontSize: props.size ? props.size : 17,
    color: props.color ? props.color : '#374050'
  }

  return(
    <small className="feature-tagline" style={styles}>{props.text}</small>
  )
}

function FeatureAction(props){

  const styles = {
    fontSize: props.size ? props.size : 20,
    color: props.color ? props.color : '#2ec986'
  }

  return(
    <Link to={props.link} className="feature-action" style={styles}>
        {props.text} <img src={arrow} alt={arrow} draggable="false" />
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

  const styles = {
    fontSize: props.size ? props.size : 35,
    color: props.color ? props.color : '#3180fb'
  }

  return(
    <FontAwesomeIcon icon={props.icon} className="feature-icon" style={styles} />
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

  const classes = cn('feature', {
    'center': props.align === 'center'
  })

  const styles = {
    width: props.width ? props.width : 260,
    height: props.height ? props.height : 224
  }

  return(
    <div className={classes} style={styles}>
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
