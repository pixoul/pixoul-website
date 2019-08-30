import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
/* Images */
import play from "./images/play.svg"

const Intro = () => (
  <div className="intro">
    <div className="play-button">
      <img src={play} alt={play} />
    </div>

    <div className="intro-header">
      <Typography variant="h1" color="white" align="center" weight="bold">How We Work.</Typography>
      <Typography variant="h6" color="white" align="center">We make is easy to find dedicated IT professionals (in days, not months).</Typography>
    </div>

    <Container className="intro-features">
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
