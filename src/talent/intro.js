import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
/* Images */
import laptop from "./images/laptop.svg"

const Intro = () => (
  <div className="intro-section">
    <div className="intro-content">
      <Typography variant="header1">Expert Talent.</Typography>
      <Typography variant="subtitle1">Discover why leading companies trust our talent network with their most complex implementations.</Typography>

      <div className="button-group">
        <Button tag={Link} to="/contact/professional-hire">Hire the Perfect Match</Button>
      </div>
    </div>
    <div className="intro-media">
      <img src={laptop} alt={laptop} className="intro-image" />
    </div>
  </div>
)

export default Intro
