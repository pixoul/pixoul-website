import React from "react"
import "./talent.scss"

/* Presentational Components */
import Intro from "./intro"
import FeaturedMember from "./featured-member"

const Talent = () => {

  return(
    <div className="talent">
      <Intro />
      <FeaturedMember />
    </div>
  )
}

export default Talent
