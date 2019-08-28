import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
/* Images */
import roadmapPromo from "./images/roadmap-promo.png"

const style = {
  backgroundImage: 'url('+roadmapPromo+')'
}

const RoadmapPromo = () => (
  <div className="roadmap-promo gutters" style={style}>
    <Typography variant="h1" color="white" align="center" weight="bold">Let’s Improve Your Roadmap.</Typography>
    <Typography variant="h5" color="white" align="center">We average a 219% increase in ROI.  Find out how.</Typography>

    <div className="roadmap-action">
      <Button tag={Link} to="/contact/professional-hire">Get in Touch</Button>
    </div>
  </div>
)


export default RoadmapPromo
