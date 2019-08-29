import React from "react"
/* Utils */
import { Legend, Timeline, Step } from "utils/timeline/timeline"
import Typography from "utils/typography/typography"
/* Data */
import steps from "./steps"

const TalentTimeline = () => (
  <div className="talent-timeline gutters">
    <div className="legend-area">
      <Legend />
    </div>
    <div className="talent-main">
      <div className="talent-header">
        <Typography variant="h1" color="white" align="left" weight="bold">Hire the Top 1% of Talent.</Typography>
        <Typography variant="h6" color="white" align="left">Our network sources only the most elite talent.  Every potential candidate is put through a rigorous vetting and evaluation process.  From there, we use AI-powered insights and white-glove matching to find you the perfect fit for your IT team.</Typography>
      </div>

      <div className="timeline-actual">
        <Timeline>
          {steps.map((step, i) => (
            <Step
              key={i}
              color={step.color}
              header={step.header}
              title={step.title}
              description={step.description}
            />
          ))}
        </Timeline>
      </div>

    </div>
  </div>
)

export default TalentTimeline
