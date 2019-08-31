import React from "react"
/* Utils */
import VideoPlayer from "utils/video-player/video-player"
import Typography from "utils/typography/typography"

const PixoulVideo = () => {
  return(
    <div className="pixoul-video gutters">
      <div className="video-content">
        <Typography variant="header1" color="white">Top Designers, Developers, and Project Managers.</Typography>
        <Typography variant="body2" color="white"> Pixoul matches talent for industry-leading organizations, from startups to the Fortune 500.</Typography>
        <Typography variant="body2" color="white">Our remote team members are more than freelancers—they’re career-focused individuals who invest their reputation in every project.</Typography>
      </div>
      <div className="video-area">
        <VideoPlayer />
      </div>
    </div>
  )
}

export default PixoulVideo
