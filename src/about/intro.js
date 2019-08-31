import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
/* Images */
import iphoneFront from "./images/iphone-front.svg"
import iphoneBack from "./images/iphone-back.svg"

const Intro = () => (
  <div className="intro-section gutters">
    <div className="intro-content">
      <Typography variant="subtitle2" color="white" align="left">HIGH PERFORMING TALENT, ON DEMAND.</Typography>
      <Typography variant="header1" color="white" align="left">Welcome to Your Elite Talent Network.</Typography>
      <Typography variant="body1" color="white" align="left" >We hire world-class designers, developers and project managers.  Pixoul talent contributes to the most innovative and profitable companies across the globe.</Typography>

      <div className="button-group">
        <Button theme="secondary" tag={Link} to="/contact/professional-hire">Hire the Perfect Match</Button>
        <Button theme="secondary" outline tag={Link} to="/contact/join-team">Join the Team</Button>
      </div>
    </div>
    <div className="intro-media">
      <img src={iphoneFront} alt={iphoneFront} className="intro-image front" />
      <img src={iphoneBack} alt={iphoneBack} className="intro-image back" />
    </div>
  </div>
)

export default Intro
