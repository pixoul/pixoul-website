import React from "react"

/* Utils */
import Opening from "utils/opening/opening"
import {Wizard, WizardStep} from "utils/wizard/wizard"

/* Icons */
import marker from "./images/icons/marker-grey.svg"
import wand from "./images/icons/wand-grey.svg"
import thumbsup from "./images/icons/thumbsup-grey.svg"
import rocket from "./images/icons/rocket-grey.svg"

const ProjectSteps = () => (
  <div className="project-steps">
    <Opening
      title="How We Engage Every Project."
    />

    <Wizard defaultStep={1}>
      <WizardStep step={1} title="Talk To An Expert" icon={marker}>
        <div className="steps-content">
          <div className="project-paragraph">Your dedicated account manager will work with you to determine your exact needs—from skill specifications, to cultural expectations, and more.  We start by understanding your project goals, scope, size, and unique budget needs.  Not sure what you need?
          </div>
          <div className="project-paragraph">Don’t worry—we’ve got you covered.  We’ll walk you through the best way to augment your team and push your product or service to new levels of excellence.  So buckle in and get ready for the next step in your tech journey.
          </div>
        </div>
      </WizardStep>
      <WizardStep step={2} title="Build A Custom Team" icon={wand}>
        <div className="steps-content">
          <div className="project-paragraph">Once we know exactly what you’re looking for, we’ll begin the matchmaking process.  Within days, and depending on project specifics, your account manager will pair you with the exact  IT professionals you need to build your dream team based on skills, location, personality, interest, and more.</div>
          <div className="project-paragraph">Beginning with our proprietary AI alogrithm, we’ll narrow our talent pool to only the best IT resources for your project.  Your dedicated account manager will then hand-select the candidates who meet your specific qualifications.</div>
        </div>
      </WizardStep>
      <WizardStep step={3} title="Hire The Perfect Fit" icon={thumbsup}>
        <div className="steps-content">
          <div className="project-paragraph">After we’ve narrowed down the talent pool to a select group of candidates, they’ll be presented to you for your approval.  Remember, every member of our talent network is already highly vetted, highly experienced, and has passed a rigorous, 7-step hiring process.</div>
          <div className="project-paragraph">Now that you’ve picked your team, getting started is  easy.  We’ll guide you through new-hire best practices and show you how to get the most out of your remote freelancer.  And your free trial means you won’t pay for the initial onboarding period.</div>
        </div>
      </WizardStep>
      <WizardStep step={4} title="Ramp Up or Down" icon={rocket}>
        <div className="steps-content">
          <div className="project-paragraph">We can ramp your project up or down to match timelines, budgets, and project expectations.  At a moment’s notice we’re able to scale your team to meet specific KPIs. Each member of our talent network has a specific skillset that you can leverage throughout your project’s lifecycle.</div>
          <div className="project-paragraph">Throughout this process, our dedicated support team is checking in and measuring your team’s achievements. We’ll be with you each step of the way to ensure your freelancer seamlessly integrates with your organization.</div>
        </div>
      </WizardStep>
    </Wizard>

  </div>
)

export default ProjectSteps
