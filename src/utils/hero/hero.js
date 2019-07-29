import React from "react"
import cn from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/pro-light-svg-icons'
import "./hero.scss"

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

  const styles = {
    maxWidth: props.width ? props.width : '100%'
  }

  return(
    <div className="hero-media" >
      <img src={props.media} alt={props.alt} draggable="false" style={styles}/>
    </div>
  )
}

function HeroTagline(props){
  const styles = {
    width: props.width ? props.width : 500,
    fontSize: props.size ? props.size : 20
  }

  if(props.color) styles.color = props.color

  return(
    <div className="hero-tagline" style={styles}>
      {props.text}
    </div>
  )
}

function HeroAction({ icon = faChevronCircleDown, text, action}){
  return(
    <a className="hero-action" href={action}>
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
    backgroundImage: 'url('+props.bg+')',
    paddingTop: props.offset ? props.offset : 150
  }

  if(props.height) styles.height = props.height

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
