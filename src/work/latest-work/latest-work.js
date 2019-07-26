import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "shards-react"
import "./latest-work.scss"

import ClientCard from "utils/client-card/client-card"
import Opening from "utils/opening/opening"

import iuzeitMedia from "images/bg01.png"
import georgiaPacificMedia from "images/bg02.png"
import sofsMedia from "images/bg03.png"


export default function LatestWork(){
  return(
    <Container className="latest-work">
      <Opening
        title="See our latest work."
        subtitle="Explore some of our recent collaborations with major brands."
      />
      <Row>
        <Col sm="12" md="4">
          <ClientCard media={iuzeitMedia} title="iuzeit" />
        </Col>
        <Col sm="12" md="4">
          <ClientCard media={georgiaPacificMedia} title="Georgia-Pacific" />
        </Col>
        <Col sm="12" md="4">
          <ClientCard media={sofsMedia} title="Stallion Oilfield Services" />
        </Col>
      </Row>
      <Row>
        <Col className="latest-action">
          <Button outline tag={Link} to="/work">More Case Studies</Button>
        </Col>
      </Row>
    </Container>
  )
}
