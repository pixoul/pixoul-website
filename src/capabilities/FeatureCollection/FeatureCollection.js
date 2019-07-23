import React from "react"
import { Container, Row, Col } from "shards-react";
import { faPowerOff, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'
import "./FeatureCollection.scss"

import Feature from "utils/Feature/Feature"

export default function FeatureCollection(){
  return(
    <Container className="feature-collection">
      <Row>
        <Col sm="12" md="4">
          <Feature
            title="Strategy"
            tagline="Reimagine and redefine your organizational approach by developing new ways of attaining mission-critical KPIs."
            actionLink="/capabilities/strategy"
            actionText="Learn More"
            icon={faPowerOff}
          />
        </Col>
        <Col sm="12" md="4">
          <Feature
            title="Design Thinking"
            tagline="Use Design Thinking to create products, services, systems, and experiences that address core needs of your target users."
            actionLink="/capabilities/design"
            actionText="Learn More"
            icon={faPaintBrush}
          />
        </Col>
        <Col sm="12" md="4">
          <Feature
            title="Technology"
            tagline="Bring your digital solution to life with cutting-edge infrastructure that can scale across devices and platforms."
            actionLink="/capabilities/technology"
            actionText="Learn More"
            icon={faCode}
          />
        </Col>
      </Row>
    </Container>
  )
}
