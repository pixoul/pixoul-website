import React from "react"
import "./capability-features.scss"
/* Third-Party Packages */
import { Container, Row, Col } from 'react-grid-system'
/* Utility Components */
import { Feature, FeatureHeader, FeatureTitle, FeatureIcon, FeatureTagline, FeatureAction } from "utils/feature/feature"

/* Icons */
import power from "./images/power.svg"
import brush from "./images/brush.svg"
import code from "./images/code.svg"

const CapabilityFeatures = () => {
  return(
    <Container className="capability-features">
      <Row>
        <Col sm={12} md={4}>
          <Feature>
            <FeatureHeader>
              <FeatureIcon svg={power} />
              <FeatureTitle text="Strategy" />
            </FeatureHeader>
            <FeatureTagline text="Reimagine and redefine your organizational approach by developing new ways of attaining mission-critical KPIs." />
            <FeatureAction link="/capabilities/strategy" text="Learn More" />
          </Feature>
        </Col>
        <Col sm={12} md={4}>
          <Feature>
            <FeatureHeader>
              <FeatureIcon svg={brush} />
              <FeatureTitle text="Design Thinking" />
            </FeatureHeader>
            <FeatureTagline text="Use Design Thinking to create products, services, systems, and experiences that address core needs of your target users." />
            <FeatureAction link="/capabilities/design" text="Learn More" />
          </Feature>
        </Col>
        <Col sm={12} md={4}>
          <Feature>
            <FeatureHeader>
              <FeatureIcon svg={code} />
              <FeatureTitle text="Technology" />
            </FeatureHeader>
            <FeatureTagline text="Bring your digital solution to life with cutting-edge infrastructure that can scale across devices and platforms." />
            <FeatureAction link="/capabilities/technology" text="Learn More" />
          </Feature>
        </Col>
      </Row>
    </Container>
  )
}


export default CapabilityFeatures
