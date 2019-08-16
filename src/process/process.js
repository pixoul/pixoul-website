import React from "react"
import "./process.scss"

/* Presentation Components */
import Matching from "./matching"
import KPIHero from "./kpi-hero"

const Process = () => {

  return(
    <div className="process">
      <Matching />
      <KPIHero />
    </div>
  )
}

export default Process
