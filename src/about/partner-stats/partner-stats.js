import React from "react"
import { Container, Row, Col } from "shards-react"
import "./partner-stats.scss"

import Opening from "utils/opening/opening"
import { Feature, FeatureHeader, FeatureTitle, FeatureIcon, FeatureTagline, FeatureAction } from "utils/feature/feature"

export default function PartnerStats(props){
  return(
    <Container className="partner-stats">
      <Opening
        title="Our story by the numbers."
        subtitle="Pixoul is a human-centered design agency and consultancy that helps businesses find their voice in the digital space. Our partners trust us to provide them with exceptional digital products based on the foundations of Design Thinking to achieve business goals and affect bottom lines. "
      />
      <Row>
        <Col sm="12" md="4">
          <Feature>
            <FeatureHeader>
              <FeatureTitle text="211%" />
            </FeatureHeader>
            <FeatureTagline text="outperformance vs. design averse companies" />
            <FeatureAction link="/capabilities/strategy" text="Strategy" />
          </Feature>
        </Col>
        <Col sm="12" md="4">
          <Feature>
            <FeatureHeader>
              <FeatureTitle text="$250M+" />
            </FeatureHeader>
            <FeatureTagline text="in collective designed product value" />
            <FeatureAction link="/capabilities/design" text="Design" />
          </Feature>
        </Col>
        <Col sm="12" md="4">
          <Feature>
            <FeatureHeader>
              <FeatureTitle text="10x" />
            </FeatureHeader>
            <FeatureTagline text="increased product performance" />
            <FeatureAction link="/capabilities/technology" text="Technology" />
          </Feature>
        </Col>
      </Row>
    </Container>
  )
}
