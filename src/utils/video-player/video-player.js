import React, { useRef } from "react"
import "./video-player.scss"

import play from "./play-blue.svg"

const VideoPlayer = ({
  src = "//clips.vorwaerts-gmbh.de/VfE_html5.mp4",
  poster = "//s3-us-west-2.amazonaws.com/s.cdpn.io/3174/poster.png",
  size = 468
}) => {

  const video = useRef(null)

  const playVideo = (e) => {
      e.target.classList.add('is-hidden')
      video.current.play()
      video.current.classList.remove('has-media-controls-hidden')
      video.current.setAttribute('controls', 'controls')
  }

  return(
    <div className="video-wrapper">
      <img src={play} alt={play} className="video-overlay-play-button" onClick={playVideo} />
      <video src={src} poster={poster} ref={video} className="has-media-controls-hidden" width={size} ></video>
    </div>
  )
}

export default VideoPlayer
