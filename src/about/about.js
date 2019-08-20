import React from "react";
import "./about.scss"
/* Presentational Components */
import Intro from "./intro"
import LoveMore from "./love-more"
import RoadmapPromo from "./roadmap-promo"
import Comparison from "./comparison"
/* Images */
import augmented from "./images/augmented.png"
import support from "./images/support.png"

export default function About() {

  return(
    <div className="about">
      <Intro />

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
            <span className="info-title">Full Team Support.</span>
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
