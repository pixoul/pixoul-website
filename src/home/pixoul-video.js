import React from "react"
/* Utils */
import VideoPlayer from "utils/video-player/video-player"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"

const PixoulVideo = () => {
  return(
    <div className="pixoul-video gutters">
      <div className="video-content">
        <Animate delay={100}>
          <Typography variant="header1" color="white">Top Designers, Developers, and Project Managers.</Typography>
        </Animate>
        <Animate delay={200}>
          <Typography variant="body1" color="white"> Pixoul matches talent for industry-leading organizations, from startups to the Fortune 500.</Typography>
        </Animate>
        <Animate delay={300}>
          <Typography variant="body1" color="white">Our remote team members are more than freelancers—they’re career-focused individuals who invest their reputation in every project.</Typography>
        </Animate>
      </div>
      <Animate delay={300}>
        <div className="video-area">
          <VideoPlayer />
        </div>
      </Animate>
    </div>
  )
}

export default PixoulVideo
