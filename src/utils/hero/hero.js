import React from "react"
import cn from "classnames"
import {useSpring, animated} from 'react-spring'
import "./hero.scss"

import whiteMouse from "./images/white-mouse.svg"
import blueMouse from "./images/blue-mouse.svg"

function HeroText({
  text,
  size = 'md',
  color,
  bold = false
}){

  const styles = {}
  if(color) styles.color = color

  const classes = cn('hero-text', {
    'xl-text': size === 'xl',
    'lg-text': size === 'lg',
    'md-text': size === 'md',
    'sm-text': size === 'sm',
    'bold-text': bold
  })

  return(
    <div className={classes} style={styles}>
      {text}
    </div>
  )
}

function HeroMedia({
  width = '100%',
  media,
  alt,
  offset = '0%'
}){

  const styles = {}
  if(width) styles.maxWidth = width

  const animation = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)'
    },
    to: {
      opacity: 1,
      transform: `translate3d(0, ${offset}, 0)`
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
      <img src={media} alt={alt} draggable="false" style={styles}/>
    </animated.div>
  )
}

function HeroAction({ action, gutterTop, gutterBottom, blue = false }){
  const styles = {}
  if(gutterTop) styles.paddingTop = gutterTop
  if(gutterBottom) styles.paddingBottom = gutterBottom

  const mouse = blue ? blueMouse : whiteMouse

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }))
  const trans = (x, y) => `perspective(600px) translate(${x}px,${y}px)`

  return(
    <animated.a
      className="hero-action"
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

function Hero({
  className,
  children,
  bg,
  offset,
  height,
  theme,
  align
}){

  const styles = {}

  if(bg) styles.backgroundImage = 'url('+bg+')'
  if(height) {
    styles.height = height
    styles.minHeight = height
  }
  if(offset) styles.paddingTop = offset

  const classes = cn(
    className,
    'hero',
    {
      'light': theme === 'light',
      'dark': theme === 'dark',
      'center': align === 'center',
      'left': align === 'left'
    })

  return(
    <div className={classes} style={styles}>
      {children}
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
  HeroAction
}
