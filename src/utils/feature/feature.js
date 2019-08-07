import React from "react"
import cn from "classnames"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import "./feature.scss"
import greenArrow from "./images/green-arrow.svg"

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

  const arrow = props.arrowIcon ? props.arrowIcon : greenArrow

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

function FeatureIcon({
  icon,
  svg,
  color,
  size
}){

  const styles = {}
  if(color) styles.color = color
  if(size) styles.fontSize = size

  if(svg){
    return(<img src={svg} alt={svg} className="feature-svg" />)
  }

  if(icon){
    return(<FontAwesomeIcon icon={icon} className="feature-icon" style={styles} />)
  }

  return null
}

function FeatureHeader({
  children
}){
  return(
    <div className="feature-media">
      {children}
    </div>
  )
}

export default function Feature({
  align,
  children
}){

  const classes = cn('feature', {
    'center': align === 'center'
  })

  return(
    <div className={classes}>
      {children}
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
