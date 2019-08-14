import React from "react";
import "./about.scss"
/* Utils */
import Button from "utils/button/button"
/* Presentational Components */
import LoveMore from "./love-more"
import RoadmapPromo from "./roadmap-promo"
import Comparison from "./comparison"
/* Images */
import iphoneFront from "./images/iphone-front.svg"
import iphoneBack from "./images/iphone-back.svg"
import augmented from "./images/augmented.png"
import support from "./images/support.png"

export default function About() {

  return(
    <div className="about">
      <div className="intro-section gutters">
        <div className="intro-content">
          <h4 className="intro-tagline">HIGH PERFORMING TALENT, ON DEMAND.</h4>
          <h1 className="intro-title">Welcome to your elite talent network.</h1>
          <p className="intro-text">We hire world-class designers, developers and project managers.  Pixoul talent contributes to the most innovative and profitable companies across the globe. </p>

          <div className="button-group">
            <Button theme="secondary">Hire the Perfect Match</Button>
            <Button theme="secondary" outline>Join the Team</Button>
          </div>
        </div>
        <div className="intro-media">
          <img src={iphoneFront} alt={iphoneFront} className="intro-image front" />
          <img src={iphoneBack} alt={iphoneBack} className="intro-image back" />
        </div>
      </div>

      <div className="info-grid">
        <div className="info-item ltr">
          <div className="info-content">
            <span className="info-title">Augmented IT Talent.</span>
            <span className="info-description">Utilize our full-time or hourly based freelancers to harness technical debt, combat roadmap scope creep, or fill knowledge gaps within your organization.</span>
          </div>
          <div className="info-media">
            <img src={augmented} alt={augmented} className="info-media-image" />
          </div>
        </div>

        <div className="info-item rtl">
          <div className="info-content">
            <span className="info-title">Full team Support.</span>
            <span className="info-description">Our network can help you source a full team of designers, developers, and project managers—ensuring your next digital project is a smooth success.  </span>
          </div>
          <div className="info-media">
            <img src={support} alt={support} className="info-media-image" />
          </div>
        </div>
      </div>


      <LoveMore />

      <RoadmapPromo />

      <Comparison />

    </div>
  )
}
