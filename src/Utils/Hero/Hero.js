import React from "react"
import cn from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import "./Hero.scss"


function HeroTitle(props){

  const styles = {
    width: props.width ? props.width : 675,
    fontSize: props.size ? props.size : 45
  }

  return(
    <div className="hero-title" style={styles}>
      {props.text}
    </div>
  )
}

function HeroMedia(props){
  return(
    <div className="hero-media">
      <img src={props.media} alt={props.alt}/>
    </div>
  )
}

function HeroTagline(props){
  const styles = {
    width: props.width ? props.width : 500,
    fontSize: props.size ? props.size : 20
  }

  return(
    <div className="hero-tagline" style={styles}>
      {props.text}
    </div>
  )
}

function HeroAction({ icon = faChevronCircleDown, text}){
  return(
    <a className="hero-action">
      { icon && (
        <FontAwesomeIcon icon={icon} className="hero-icon" />
      )}

      {text}
    </a>
  )
}

function HeroHeader(props){
  return(
    <div className="hero-header">
      { props.children }
    </div>
  )
}

function HeroFooter(props){
  return(
    <div className="hero-footer">
      {props.children}
    </div>
  )
}

function HeroContent(props){
  return(
    <div className="hero-content">
      {props.children}
    </div>
  )
}

function Hero(props){

  const styles = {
    backgroundImage: 'url('+props.bg+')'
  }

  const classes = cn('hero', {
    'light': props.theme === 'light',
    'dark': props.theme === 'dark',
    'center': props.align === 'center',
    'left': props.align === 'left'
  })

  return(
    <div className={classes} style={styles}>
      {props.children}
    </div>
  )
}

export {
  Hero,
  HeroHeader,
  HeroContent,
  HeroFooter,
  HeroMedia,
  HeroTitle,
  HeroTagline,
  HeroAction
}
