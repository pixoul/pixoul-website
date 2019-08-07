import React from "react"
import { Container, Row, Col } from 'react-grid-system'
import "./partner-stats.scss"

import Opening from "utils/opening/opening"
import { Feature, FeatureHeader, FeatureTitle, FeatureTagline, FeatureAction } from "utils/feature/feature"

import arrow from "./images/grey-arrow.svg"

export default function PartnerStats(props){
  return(
    <div className="partner-stats">
      <Opening
        width={980}
        title="Our story by the numbers."
        subtitle="Pixoul is a human-centered design agency and consultancy that helps businesses find their voice in the digital space. Our partners trust us to provide them with exceptional digital products based on the foundations of Design Thinking to achieve business goals and affect bottom lines. "
      />
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Feature align="center">
              <FeatureHeader>
                <FeatureTitle text="219%" size={50}  color="#3180fb" />
              </FeatureHeader>
              <FeatureTagline text="outperformance vs. design averse companies" size={20} />
              <FeatureAction link="/capabilities/strategy" text="Strategy" size={20} color="#374050" arrowIcon={arrow} />
            </Feature>
          </Col>
          <Col sm={12} md={4}>
            <Feature align="center">
              <FeatureHeader>
                <FeatureTitle text="$250M+" size={50}  color="#3180fb" />
              </FeatureHeader>
              <FeatureTagline text="in collective designed product value" size={20} />
              <FeatureAction link="/capabilities/design" text="Design" size={20} color="#374050" arrowIcon={arrow} />
            </Feature>
          </Col>
          <Col sm={12} md={4}>
            <Feature align="center">
              <FeatureHeader>
                <FeatureTitle text="10x" size={50}  color="#3180fb" />
              </FeatureHeader>
              <FeatureTagline text="increased product performance" size={20} />
              <FeatureAction link="/capabilities/technology" text="Technology" size={20} color="#374050" arrowIcon={arrow} />
            </Feature>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
