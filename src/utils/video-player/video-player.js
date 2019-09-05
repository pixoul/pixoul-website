import React, { useState, useRef, useEffect } from "react"
/* Third-Party */
import VisibilitySensor from "react-visibility-sensor"
import injectSheet from 'react-jss'
/* Images */
import defaultPoster from "./poster.png"

const styles = theme => ({
  wrapper: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  video: {
    width: '100%',
    height: props => props.overlay ? '100vh' : '100%',
    verticalAlign: 'middle',
    objectFit: 'cover',
    "&::-webkit-media-controls": {
      display: props => props.controls ? 'normal' : 'none'
    }
  },
  content: {
    background: props => props.overlay ? 'linear-gradient(to bottom, rgba(65, 60, 60, 0.6), #3c3d41)' : 'none',
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
})

const VideoPlayer = ({
  src = "//clips.vorwaerts-gmbh.de/VfE_html5.mp4",
  poster = defaultPoster,
  overlay = false,
  autoplay = false,
  children,
  classes,
  theme,
  ...rest
}) => {
  const video = useRef(null)

  const toggleVideo = isVisible => {
    if(autoplay && isVisible){
      video.current.play()
    }else{
      video.current.pause()
    }
  }

  return(
    <VisibilitySensor active={autoplay} partialVisibility onChange={toggleVideo}>
      <div className={classes.wrapper}>
        <div className={classes.content}>{children}</div>
        <video src={src} poster={poster} ref={video} className={classes.video} {...rest}></video>
      </div>
    </VisibilitySensor>
  )
}

export default injectSheet(styles)(VideoPlayer)
