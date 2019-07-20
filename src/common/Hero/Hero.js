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
      <div className="shards-hero hero-content">
        <Container>
          <Row>
            <Col sm="12">
              <h1 className="text-center">{props.title}</h1>
              <p className="text-center">{props.tagline}</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="shards-hero hero-footer">
        {props.footer}
        <Button outline theme="transparent">{props.action}</Button>
      </div>
    </div>
  )
}
