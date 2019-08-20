import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
/* Images */
import ipad from "./images/ipad.svg"

const Intro = () => {
  return(
    <div className="intro-section">
      <h1 className="intro-text">On Demand IT Talent,</h1>
      <h1 className="intro-text">Simplified.</h1>
      <div className="button-group">
        <Button tag={Link} to="/contact/professional-hire">Hire the Perfect Match</Button>
        <Button outline tag={Link} to="/contact/join-team">Join the Team</Button>
      </div>
      <div className="intro-media">
        <img src={ipad} alt={ipad} className="intro-image" />
      </div>
    </div>
  )
}

export default Intro
