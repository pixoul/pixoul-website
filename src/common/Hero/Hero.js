import React from "react"
import { Container, Row, Col, Button } from "shards-react";
import "./Hero.scss"

export default function Hero(props){

  const styles = {
    backgroundImage: 'url('+props.bg+')'
  }

  return(
    <div className="shards-hero" style={styles}>
      <div className="shards-hero hero-header">
        { props.header }
      </div>
      <div className="shards-hero hero-content center">
        <Container>
          <Row>
            <Col sm="12">
              <div className="hero-image">{props.image}</div>
              <div className="hero-title">{props.title}</div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="shards-hero hero-footer">
        <div className="hero-tagline">{props.tagline}</div>
        <Button outline theme="transparent">{props.action}</Button>
      </div>
    </div>
  )
}
