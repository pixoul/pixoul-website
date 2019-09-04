import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import ipad from "./images/ipad.svg"

const Intro = () => {
  return(
    <div className="intro-section">
        <Typography variant="header1" align="center">On Demand IT Talent, <br /> Simplified.</Typography>

      <Animate delay={300}>
        <div className="button-group">
          <Button component={Link} to="/contact/professional-hire">Hire the Perfect Match</Button>
          <Button outline component={Link} to="/contact/join-team">Join the Team</Button>
        </div>
      </Animate>

      <div className="intro-media">
        <img src={ipad} alt={ipad} className="intro-image" />
      </div>
    </div>
  )
}

export default Intro
