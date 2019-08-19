import React from "react"
/* Utils */
import Opening from "utils/opening/opening"
import Stat from "utils/stat/stat"

const QualityPerformance = () => {

  return(
    <div className="quality-performance">
      <Opening
        title="Quality and Perfomance."
        subtitle="Our most impressive stats speak for themselves."
      />

      <div className="quality-stats">
        <Stat
          value="1.5+"
          description="Average Project Length (Yrs.)"
          progress={75}
        />

        <Stat
          value="$250M"
          description="Value of Delivered Solutions"
          progress={60}
        />

        <Stat
          value="300+"
          description="Team Members Already Working"
          progress={35}
        />
      </div>
    </div>
  )
}

export default QualityPerformance
