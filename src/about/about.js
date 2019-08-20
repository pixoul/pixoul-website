import React from "react";
import "./about.scss"
/* Presentational Components */
import Intro from "./intro"
import InfoGrid from "./info-grid"
import LoveMore from "./love-more"
import RoadmapPromo from "./roadmap-promo"
import Comparison from "./comparison"


export default function About() {

  return(
    <div className="about">
      <Intro />
      <InfoGrid />
      <LoveMore />
      <RoadmapPromo />
      <Comparison />
    </div>
  )
}
