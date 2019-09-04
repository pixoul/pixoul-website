import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
import { Animate } from "utils/animate/animate"
/* Icons */
import ThumbsupIcon from "utils/icons/thumbsup"
import MoneyIcon from "utils/icons/money"
import HeartIcon from "utils/icons/heart"
import LightningIcon from "utils/icons/lightning"
import ClockIcon from "utils/icons/clock"
import UserIcon from "utils/icons/user"

const PixoulDifference = () => {

  return(
    <div className="difference-section gutters">
      <Animate>
        <Typography variant="header1" align="center">The Pixoul Difference</Typography>
      </Animate>
      <Animate delay={200}>
        <Typography variant="subtitle1" align="center">We’re better—let us tell you why.</Typography>
      </Animate>

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Animate delay={300}>
              <Feature
                shrink
                position="left"
                title="TOP 1% GUARANTEED"
                icon={<ThumbsupIcon color="#276cf2" />}
                description="Our 7-step hiring process ensures you work with only the best, most experienced freelancers who are actively building their own businesses."
              />
            </Animate>
          </Col>
          <Col sm={12} md={6}>
            <Animate delay={400}>
              <Feature
                shrink
                position="left"
                title="RISK FREE TRIAL"
                icon={<MoneyIcon color="#276cf2" />}
                description="At Pixoul, we’re confident that we’ll find you the perfect match.  In fact, we’re so confident that we provide a risk-free trial for you to ensure smooth onboarding."
              />
            </Animate>
          </Col>
          <Col sm={12} md={6}>
          <Animate delay={500}>
            <Feature
              shrink
              position="left"
              title="AI-POWERED, WHITE GLOVE TREATMENT"
              icon={<HeartIcon color="#276cf2" />}
              description="Our powerful AI matching helps narrow down your talent pool by matching on skills, industry experience, availability, location, and more.  Then, Pixoul hand-selects and presents your team for approval."
            />
            </Animate>
          </Col>
          <Col sm={12} md={6}>
            <Animate delay={600}>
              <Feature
                shrink
                position="left"
                title="FULL TEAM SUPPORT"
                icon={<LightningIcon color="#276cf2" />}
                description="Our network spans the digital project lifecycle—from developers to full scrum teams that include UI/UX designers, business analysts, QA/testers, devops, db admins, and project managers."
              />
            </Animate>
          </Col>
          <Col sm={12} md={6}>
            <Animate delay={700}>
              <Feature
                shrink
                position="left"
                title="ON DEMAND EXPERTISE"
                icon={<ClockIcon color="#276cf2" />}
                description="Pixoul matches you with top tech talent within your ideal time table.  By using senior-level professionals, your project will hit the ground running fast."
              />
            </Animate>
          </Col>
          <Col sm={12} md={6}>
            <Animate delay={800}>
              <Feature
                shrink
                position="left"
                title="DEDICATED ACCOUNT MANAGER"
                icon={<UserIcon color="#276cf2" larger/>}
                description="You’ll be matched with a dedicated Account Manager who is always available to ensure a lasting relationship with your freelancer, and guide you every step of the way."
              />
            </Animate>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default PixoulDifference
