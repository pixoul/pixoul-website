import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
/* Images */
import roadmapPromo from "./images/roadmap-promo.png"

const style = {
  backgroundImage: 'url('+roadmapPromo+')'
}

const RoadmapPromo = () => (
  <div className="roadmap-promo gutters" style={style}>
    <span className="roadmap-title">Let’s Improve Your Roadmap.</span>
    <span className="roadmap-tagline">We average a 219% increase in ROI.  Find out how.</span>
    <div className="roadmap-action">
      <Button tag={Link} to="/contact">Get in Touch</Button>
    </div>
  </div>
)


export default RoadmapPromo
