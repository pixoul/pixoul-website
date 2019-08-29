import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
/* Icons */
import ClockIcon from "utils/icons/clock"
import ThumbsupIcon from "utils/icons/thumbsup"
import HeartIcon from "utils/icons/heart"
import WandIcon from "utils/icons/wand"
import ProjectManagementIcon from "utils/icons/project-management"
import LayoutIcon from "utils/icons/layout"

const LoveMore = () => (
  <div className="love-more">

    <Typography variant="h1" color="primary" align="center" weight="bold">More to Love.</Typography>

    <Container>
      <Row>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Senior Level Expertise"
            icon={<ClockIcon color="#276cf2" />}
            description="Our team is ready to hit the ground running."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Higher Quality Teams"
            icon={<ThumbsupIcon color="#276cf2" />}
            description="Plan for clean design and even cleaner code."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Expert Management"
            icon={<HeartIcon color="#276cf2" />}
            description="Your account manager will guide every step."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Hand-Picked Team"
            icon={<WandIcon color="#276cf2" />}
            description="We’re AI-powered, but hand delivered."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Online Platform"
            icon={<LayoutIcon color="#276cf2" />}
            description="Use our powerful tools for all your needs."
          />
        </Col>
        <Col sm={12} md={4}>
          <Feature
            position="top-center"
            title="Automated Payroll"
            icon={<ProjectManagementIcon color="#276cf2" />}
            description="Scale with ease to handle demand."
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default LoveMore
