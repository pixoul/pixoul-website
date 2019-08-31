import React from "react"
/* Utils */
import { Legend, LegendItem, Timeline, Step } from "utils/timeline"
import Typography from "utils/typography/typography"
/* Data */
import steps from "./steps"

const TalentTimeline = () => (
  <div className="talent-timeline gutters">
    <div className="legend-area">
      <Legend>
        <LegendItem color="gray">Week 1</LegendItem>
        <LegendItem color="white">Week 2-4</LegendItem>
        <LegendItem color="blue">Week 4+</LegendItem>
      </Legend>
    </div>
    <div className="talent-main">
      <div className="talent-header">
        <Typography variant="header1" color="white">Hire the Top 1% of Talent.</Typography>
        <Typography variant="body1" color="white">Our network sources only the most elite talent.  Every potential candidate is put through a rigorous vetting and evaluation process.  From there, we use AI-powered insights and white-glove matching to find you the perfect fit for your IT team.</Typography>
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
