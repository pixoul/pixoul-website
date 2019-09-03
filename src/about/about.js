import React from "react";
import "./about.scss"
/* Presentational Components */
const Intro = React.lazy(() => import("./intro"))
const InfoGrid = React.lazy(() => import("./info-grid"))
const LoveMore = React.lazy(() => import("./love-more"))
const RoadmapPromo = React.lazy(() => import("./roadmap-promo"))
const Comparison = React.lazy(() => import("./comparison"))

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
