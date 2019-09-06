import React from "react"
import "./talent.scss"

/* Presentational Components */
const Intro = React.lazy(() => import("./intro"))
const FeaturedMember = React.lazy(() => import("./featured-member"))
const TalentTimeline = React.lazy(() => import("./talent-timeline"))
const ClientWork = React.lazy(() => import("./client-work"))
const Excel = React.lazy(() => import("./excel"))

const Talent = () => {

  return(
    <div className="talent">
      <Intro />
      <FeaturedMember />
      <TalentTimeline />
      <ClientWork />
      <Excel />
    </div>
  )
}

export default Talent
