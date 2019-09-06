import React from "react"
import "./process.scss"

/* Presentation Components */
const Intro = React.lazy(() => import("./intro"))
const ProjectSteps = React.lazy(() => import("./project-steps"))
const Matching = React.lazy(() => import("./matching"))
const KPIHero = React.lazy(() => import("./kpi-hero"))

const Process = () => {

  return(
    <div className="process">
      <Intro />
      <ProjectSteps />
      <Matching />
      <KPIHero />
    </div>
  )
}

export default Process
