import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
/* Icons */
import clock from "./images/icons/clock.svg"
import thumbsup from "./images/icons/thumbsup.svg"
import heart from "./images/icons/heart.svg"
import wand from "./images/icons/wand.svg"
import pm from "./images/icons/pm.svg"
import layout from "./images/icons/layout.svg"

const LoveMore = () => (
  <div className="love-more">

    <Typography variant="h1" color="primary" align="center" weight="bold">More to Love.</Typography>

    <Container>
      <Row>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Senior Level Expertise"
            media={clock}
            description="Our team is ready to hit the ground running."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Higher Quality Teams"
            media={thumbsup}
            description="Plan for clean design and even cleaner code."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Expert Management"
            media={heart}
            description="Your account manager will guide every step."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Hand-Picked Team"
            media={wand}
            description="We’re AI-powered, but hand delivered."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Online Platform"
            media={layout}
            description="Use our powerful tools for all your needs."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Automated Payroll"
            media={pm}
            description="Scale with ease to handle demand."
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default LoveMore
