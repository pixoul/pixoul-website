import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
import { Link } from "react-router-dom"
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
import Button from "utils/button/button"
import { Animate } from "utils/animate/animate"
/* Icons */
import DevelopmentIcon from "utils/icons/development"
import DesignIcon from "utils/icons/design"
import PrintIcon from "utils/icons/print"

const TopCapabilities = () => {

  return(
    <div className="top-capabilities gutters">
        <div className="capabilities-header">
          <Typography variant="header1" align="center">Our Top Capabilities.</Typography>
          <Typography variant="subtitle1" align="center">Hire career-focused team members who <br /> will grow and support your initiatives.</Typography>
        </div>

        <Container>
          <Row>
            <Col sm={12} md={4}>
              <Feature
                position="top"
                align="center"
                title="Development"
                icon={<DevelopmentIcon color="#276cf2" circular />}
                description="Front-end, back-end, QA testing, and database admin."
              />
            </Col>
            <Col sm={12} md={4}>
              <Feature
                position="top"
                align="center"
                title="UX/UI DESIGN"
                icon={<DesignIcon color="#276cf2" circular />}
                description="Research, branding, design, animation, and product demos."
              />
            </Col>
            <Col sm={12} md={4}>
              <Feature
                position="top"
                align="center"
                title="PROJECT MANAGEMENT"
                icon={<PrintIcon color="#276cf2" circular />}
                description="Agile and waterfall methodologies, design thinking, and more."
              />
            </Col>
          </Row>
        </Container>

        <Animate delay={300} once>
          <div className="capabilities-button">
            <Button component={Link} to="/process">Learn More</Button>
          </div>
        </Animate>
    </div>
  )
}

export default TopCapabilities
