import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Feature from "utils/feature/feature"
/* Icons */
import thumbsup from "./images/icons/thumbsup.svg"
import money from "./images/icons/money.svg"
import heart from "./images/icons/heart.svg"
import lightning from "./images/icons/lightning.svg"
import clock from "./images/icons/clock.svg"
import user from "./images/icons/user.svg"

const PixoulDifference = () => {

  return(
    <div className="difference-section gutters">
      <h3 className="difference-title">The Pixoul Difference</h3>
      <h4 className="difference-subtitle">We’re better—let us tell you why.</h4>


      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Feature
              position="left"
              title="TOP 1% GUARANTEED"
              media={thumbsup}
              description="Our 7-step hiring process ensures you work with only the best, most experienced freelancers who are actively building their own businesses."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="left"
              title="RISK FREE TRIAL"
              media={money}
              description="At Pixoul, we’re confident that we’ll find you the perfect match.  In fact, we’re so confident that we provide a risk-free trial for you to ensure smooth onboarding."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="left"
              title="AI-POWERED, WHITE GLOVE TREATMENT"
              media={heart}
              description="Our powerful AI matching helps narrow down your talent pool by matching on skills, industry experience, availability, location, and more.  Then, Pixoul hand-selects and presents your team for approval."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="left"
              title="FULL TEAM SUPPORT"
              media={lightning}
              description="Our network spans the digital project lifecycle—from developers to full scrum teams that include UI/UX designers, business analysts, QA/testers, devops, db admins, and project managers."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="left"
              title="ON DEMAND EXPERTISE"
              media={clock}
              description="Pixoul matches you with top tech talent within your ideal time table.  By using senior-level professionals, your project will hit the ground running fast."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="left"
              title="DEDICATED ACCOUNT MANAGER"
              media={user}
              description="You’ll be matched with a dedicated Account Manager who is always available to ensure a lasting relationship with your freelancer, and guide you every step of the way."
            />
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default PixoulDifference
