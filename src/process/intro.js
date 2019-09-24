import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
import VideoPlayer from "utils/video-player/video-player"

const Intro = () => (
  <VideoPlayer color="white" fullscreen autoplay loop muted>
    <div className="intro">
        <div className="intro-header">
          <Typography variant="header1" color="white" align="center">How We Work.</Typography>
          <Typography variant="subtitle1" color="white" align="center">We make is easy to find dedicated IT professionals (in days, not months).</Typography>
        </div>

        <Container className="intro-features">
          <Row>
            <Col sm={12} md={4}>
              <Feature
                shrink
                theme="light"
                position="top"
                align="center"
                title="DISCUSS YOUR GOALS"
                description="Work with a dedicated account manager."
              />
            </Col>

            <Col sm={12} md={4}>
              <Feature
                shrink
                theme="light"
                position="top"
                align="center"
                title="WHITE GLOVE SELECTION"
                description="Get matched with the right team member for your needs."
              />
            </Col>

            <Col sm={12} md={4}>
              <Feature
                shrink
                theme="light"
                position="top"
                align="center"
                title="COLLABORATE"
                description="Use our online platform to manage your new team."
              />
            </Col>
          </Row>
        </Container>
    </div>
  </VideoPlayer>
)

export default Intro
