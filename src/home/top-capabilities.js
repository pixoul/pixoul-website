import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
import { Link } from "react-router-dom"
/* Utils */
import Opening from "utils/opening/opening"
import Feature from "utils/feature/feature"
import Button from "utils/button/button"
/* Icons */
import development from "./images/icons/development.svg"
import design from "./images/icons/design.svg"
import pm from "./images/icons/pm.svg"

const TopCapabilities = () => {

  return(
    <div className="top-capabilities">
        <Opening
          title="Our Top Capabilities."
          subtitle="Hire career-focused team members who will grow and support your initiatives."
        />

        <Container>
          <Row>
            <Col sm={12} md={4}>
              <Feature
                position="top-center"
                title="Development"
                media={development}
                description="Front-end, back-end, QA testing, and database admin."
              />
            </Col>
            <Col sm={12} md={4}>
              <Feature
                position="top-center"
                title="UX/UI DESIGN"
                media={design}
                description="Research, branding, design, animation, and product demos."
              />
            </Col>
            <Col sm={12} md={4}>
              <Feature
                position="top-center"
                title="PROJECT MANAGEMENT"
                media={pm}
                description="Agile and waterfall methodologies, design thinking, and more."
              />
            </Col>
          </Row>
        </Container>

        <div className="capabilities-button">
          <Button tag={Link} to="/process">Learn More</Button>
        </div>
    </div>
  )
}

export default TopCapabilities
