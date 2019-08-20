import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
/* Images */
import iphoneFront from "./images/iphone-front.svg"
import iphoneBack from "./images/iphone-back.svg"

const Intro = () => (
  <div className="intro-section gutters">
    <div className="intro-content">
      <h4 className="intro-tagline">HIGH PERFORMING TALENT, ON DEMAND.</h4>
      <h1 className="intro-title">Welcome to your elite talent network.</h1>
      <p className="intro-text">We hire world-class designers, developers and project managers.  Pixoul talent contributes to the most innovative and profitable companies across the globe. </p>

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
