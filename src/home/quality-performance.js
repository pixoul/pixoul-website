import React from "react"
/* Utils */
import Typography from "utils/typography/typography"
import Stat from "utils/stat/stat"
import { Animate } from "utils/animate/animate"

const QualityPerformance = () => {

  return(
    <div className="quality-performance gutters">
      <Animate delay={100}>
        <Typography variant="header1" align="center">Quality and Perfomance.</Typography>
      </Animate>
      <Animate delay={200}>
        <Typography variant="subtitle1" align="center">Our most impressive stats speak for <br /> themselves.</Typography>
      </Animate>

      <div className="quality-stats">
        <Animate delay={300}>
          <Stat
            value="1.5+"
            description="Average Project Length (Yrs.)"
            progress={75}
          />
        </Animate>
        <Animate delay={400}>
          <Stat
            value="$250M"
            description="Value of Delivered Solutions"
            progress={60}
          />
        </Animate>
        <Animate delay={500}>
          <Stat
            value="300+"
            description="Team Members Already Working"
            progress={35}
          />
        </Animate>
      </div>
    </div>
  )
}

export default QualityPerformance
