import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
/* Images */
import laptop from "./images/laptop.svg"

const Intro = () => (
  <div className="intro-section">
    <div className="intro-content">
      <span className="intro-title">Expert Talent.</span>
      <span className="intro-text">Discover why leading companies trust our talent network with their most complex implementations.</span>

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
