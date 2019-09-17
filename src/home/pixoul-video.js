import React from "react"
/* Utils */
import VideoPlayer from "utils/video-player/video-player"
import Typography from "utils/typography/typography"

const PixoulVideo = () => (
  <div className="pixoul-video gutters">
      <div className="video-content">
        <Typography variant="header1" color="white">Top Designers, Developers, and Project Managers.</Typography>
        <Typography variant="body1" color="white"> Pixoul matches talent for industry-leading organizations, from startups to the Fortune 500.</Typography>
        <Typography variant="body1" color="white">Our remote team members are more than freelancers—they’re career-focused individuals who invest their reputation in every project.</Typography>
      </div>

      <VideoPlayer autoplay muted playsinline />
  </div>
)

export default PixoulVideo
