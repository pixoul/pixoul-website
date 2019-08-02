import React from "react"
import cn from "classnames"
import {useSpring, animated} from 'react-spring'
import "./hero.scss"

import mouse from "./mouse.svg"

function HeroText(props){

  const styles = {
    width: props.width ? props.width : 675,
    fontSize: props.size ? props.size : 45
  }

  return(
    <div className="hero-text" style={styles}>
      {props.text}
    </div>
  )
}

function HeroMedia(props){

  const styles = {
    maxWidth: props.width ? props.width : '100%'
  }

  const animation = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)'
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0%, 0)'
    },
    delay: 500,
    config: {
      mass: 1,
      tension: 280,
      friction: 120
    }
  })

  return(
    <animated.div style={animation} className="hero-media" >
      <img src={props.media} alt={props.alt} draggable="false" style={styles}/>
    </animated.div>
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

function HeroAction({ action, gutterTop, gutterBottom }){
  const styles = {}
  if(gutterTop) styles.marginTop = gutterTop
  if(gutterBottom) styles.marginBottom = gutterBottom

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }))
  const trans = (x, y) => `perspective(600px) translate(${x}px,${y}px)`

  return(
    <animated.a
      className="hero-arrow"
      style={{ transform: props.xy.interpolate(trans), ...styles }}
      onClick={action}
      onMouseEnter={() => set({ xy: [0, 10] })}
      onMouseLeave={() => set({ xy: [0, 0] })}
    >
        <img src={mouse} alt={mouse} className="action-image" />
    </animated.a>
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
  HeroText,
  HeroTagline,
  HeroAction
}
