import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
/* Images */
import ipad from "./images/ipad.svg"

const Intro = () => {
  return(
    <div className="intro-section">
      <Typography variant="header1" align="center">On Demand IT Talent, <br /> Simplified.</Typography>

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
