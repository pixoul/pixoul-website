import React from "react"
/* Utils */
import Typography from "utils/typography/typography"
import Stat from "utils/stat/stat"

const QualityPerformance = () => {

  return(
    <div className="quality-performance gutters">

      <Typography variant="h1" color="primary" align="center" weight="bold">Quality and Perfomance.</Typography>
      <Typography variant="h5" color="secondary" align="center">Our most impressive stats speak for <br /> themselves.</Typography>

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
