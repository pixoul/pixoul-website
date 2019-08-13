import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Feature from "utils/feature/feature"
/* Icons */
import thumbsup from "./images/thumbsup.svg"
import money from "./images/money.svg"
import heart from "./images/heart.svg"
import lightning from "./images/lightning.svg"
import clock from "./images/clock.svg"
import user from "./images/user.svg"

const PixoulDifference = () => {

  return(
    <div className="difference-section gutters">
      <h3 className="difference-title">The Pixoul Difference</h3>
      <h4 className="difference-subtitle">We’re better—let us tell you why.</h4>


      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Feature
              title="TOP 1% GUARANTEED"
              media={thumbsup}
              description="Our 7-step hiring process ensures you work with only the best, most experienced freelancers who are actively building their own businesses."
            />
          </Col>
          <Col sm={12} md={6} lg={4}>

          </Col>
          <Col sm={12} md={6} lg={4}>

          </Col>
          <Col sm={12} md={6} lg={4}>

          </Col>
          <Col sm={12} md={6} lg={4}>

          </Col>
          <Col sm={12} md={6} lg={4}>

          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default PixoulDifference
