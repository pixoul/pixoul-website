import React from "react"
/* Utils */
import Typography from "utils/typography/typography"
import Stat from "utils/stat/stat"

const QualityPerformance = () => {

  return(
    <div className="quality-performance gutters">
        <Typography variant="header1" align="center">Quality and Perfomance.</Typography>
        <Typography variant="subtitle1" align="center">Our most impressive stats speak for <br /> themselves.</Typography>

      <div className="quality-stats">
        <Stat
          value={1.5}
          unit="+"
          decimal={1}
          description="Average Project Length (Yrs.)"
          progress={75}
        />
        <Stat
          value={250}
          unit="M"
          symbol="$"
          description="Value of Delivered Solutions"
          progress={60}
        />
        <Stat
          value={300}
          unit="+"
          description="Team Members Already Working"
          progress={35}
        />
      </div>
    </div>
  )
}

export default QualityPerformance
