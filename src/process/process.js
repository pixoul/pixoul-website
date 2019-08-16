import React from "react"
import "./process.scss"

/* Presentation Components */
import ProjectSteps from "./project-steps"
import Matching from "./matching"
import KPIHero from "./kpi-hero"

const Process = () => {

  return(
    <div className="process">
      <ProjectSteps />
      <Matching />
      <KPIHero />
    </div>
  )
}

export default Process
