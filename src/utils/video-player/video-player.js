import React, { useRef, useState } from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import {useSpring, animated} from 'react-spring'
/* Images */
import defaultPoster from "./poster.png"
import defaultVideo from "./video.mp4"
import playBlue from "./play-blue.svg"
import playWhite from "./play-white.svg"

const styles = theme => ({
  wrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: props => props.fullscreen ? '100vh' : '100%',
    objectFit: 'cover',
    "&::-webkit-media-controls": {
      display: props => props.controls ? 'normal' : 'none'
    }
  },
  content: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  button: {
    position: 'relative',
    display: 'block',
    margin: 'auto',
    cursor: 'pointer',
    padding: {
      top: 75,
      bottom: 75
    },
    "&:hover":{
      opacity: 0.7,
      transition: 'opacity 0.6s ease-in-out'
    }
  },
  "@media (max-width: 768px)": {
    button: {
      // display: "none",
      padding: {
        top: 25,
        bottom: 25
      }
    }
  }
})

const VideoPlayer = ({
  src = defaultVideo,
  poster = defaultPoster,
  overlay = false,
  autoplay = false,
  children,
  classes,
  color = 'blue',
  fullscreen,
  ...rest
}) => {
  const video = useRef(null)
  const [playing, setPlaying] = useState(false)

  const icon = color === 'white' ? playWhite : playBlue

  const animation = useSpring({
    opacity: playing ? 0 : 1,
    transform: playing ? 'translate3d(0px,-200px,0px)' : 'translate3d(0px,0px,0px)',
    background:  'linear-gradient(to bottom, rgba(65, 60, 60, 0.6), #3c3d41)'
  })

  const toggleVideo = async () => {
    if(playing){
      await video.current.pause()
    }else{
      await video.current.play()
    }
  }

  return(
    <div className={classes.wrapper}>
      <animated.div className={classes.content} style={animation}>
        <img src={icon} alt={icon} className={classes.button} onClick={toggleVideo} />
        {children}
      </animated.div>
      <video
        src={src}
        poster={poster}
        ref={video}
        className={classes.video}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        {...rest}
       ></video>
    </div>
  )
}

export default injectSheet(styles)(VideoPlayer)
