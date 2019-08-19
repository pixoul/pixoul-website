import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Opening from "utils/opening/opening"
import Feature from "utils/feature/feature"

const Intro = () => (
  <div className="intro">
    <Opening
      theme="light"
      title="How We Work."
      subtitle="We make is easy to find dedicated IT professionals (in days, not months)."
    />


    <Container>
      <Row>
        <Col sm={12} md={4}>
          <Feature
            theme="light"
            position="top-center"
            title="DISCUSS YOUR GOALS"
            description="Work with a dedicated account manager."
          />
        </Col>

        <Col sm={12} md={4}>
          <Feature
            theme="light"
            position="top-center"
            title="WHITE GLOVE SELECTION"
            description="Get matched with the right team member for your needs."
          />
        </Col>

        <Col sm={12} md={4}>
          <Feature
            theme="light"
            position="top-center"
            title="COLLABORATE"
            description="Use our online platform to manage your new team."
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Intro
