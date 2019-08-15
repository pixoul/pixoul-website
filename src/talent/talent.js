import React from "react"
import "./talent.scss"

/* Presentational Components */
import Intro from "./intro"
import FeaturedMember from "./featured-member"
import TalentTimeline from "./talent-timeline"

const Talent = () => {

  return(
    <div className="talent">
      <Intro />
      <FeaturedMember />
      <TalentTimeline />
    </div>
  )
}

export default Talent
