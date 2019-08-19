import React from "react"
/* Utils */
import VideoPlayer from "utils/video-player/video-player"

const PixoulVideo = () => {
  return(
    <div className="pixoul-video gutters">
      <div className="video-content">
        <h1 className="video-title">Top Designers, Developers, and Project Managers.</h1>
        <p className="video-description"> Pixoul matches talent for industry-leading organizations, from startups to the Fortune 500.</p>
        <p className="video-description">Our remote team members are more than freelancers—they’re career-focused individuals who invest their reputation in every project.</p>
      </div>
      <div className="video-area">
        <VideoPlayer />
      </div>
    </div>
  )
}

export default PixoulVideo
