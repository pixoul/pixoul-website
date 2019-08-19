import React from "react"
/* Utils */
import { Legend, Timeline, Step } from "utils/timeline/timeline"
/* Data */
import steps from "./steps"

const TalentTimeline = () => (
  <div className="talent-timeline gutters">
    <div className="legend-area">
      <Legend />
    </div>
    <div className="talent-main">
      <div className="talent-header">
        <span className="talent-title">Hire the Top 1% of Talent.</span>
        <span className="talent-description">Our network sources only the most elite talent.  Every potential candidate is put through a rigorous vetting and evaluation process.  From there, we use AI-powered insights and white-glove matching to find you the perfect fit for your IT team.</span>
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
