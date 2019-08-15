import React from "react"
import "./talent.scss"

/* Presentational Components */
import Intro from "./intro"
import FeaturedMember from "./featured-member"
import TalentTimeline from "./talent-timeline"
import ClientWork from "./client-work"
import Excel from "./excel"

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
