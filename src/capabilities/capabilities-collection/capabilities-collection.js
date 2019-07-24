import React from "react"
import { Container, Row, Col } from "shards-react";
import { faPowerOff, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'
import "./capabilities-collection.scss"

import { Feature, FeatureHeader, FeatureTitle, FeatureIcon, FeatureTagline, FeatureAction } from "utils/feature/feature"
import Opening from "utils/opening/opening"

export default function CapabilitesCollection(){
  return(
    <Container className="feature-collection">
      <Opening
        title="Our Capabilities"
        subtitle="We work across industries and verticals to deliver impactful solutions."
      />
      <Row>
        <Col sm="12" md="4">
          <Feature width={343} >
            <FeatureHeader>
              <FeatureIcon icon={faPowerOff} color="#3180fb" />
              <FeatureTitle text="Strategy" />
            </FeatureHeader>
            <FeatureTagline text="Reimagine and redefine your organizational approach by developing new ways of attaining mission-critical KPIs." />
            <FeatureAction link="/capabilities/strategy" text="Learn More" />
          </Feature>
        </Col>
        <Col sm="12" md="4">
          <Feature width={343}>
            <FeatureHeader>
              <FeatureIcon icon={faPaintBrush} color="#3180fb" />
              <FeatureTitle text="Design Thinking" />
            </FeatureHeader>
            <FeatureTagline text="Use Design Thinking to create products, services, systems, and experiences that address core needs of your target users." />
            <FeatureAction link="/capabilities/design" text="Learn More" />
          </Feature>
        </Col>
        <Col sm="12" md="4">
          <Feature width={343}>
            <FeatureHeader>
              <FeatureIcon icon={faCode} color="#3180fb" />
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
