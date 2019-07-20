import React from "react"
import { Container, Row, Col } from "shards-react";
import "./Hero.scss"

export default function Hero(props){

  const styles = {
    backgroundImage: 'url('+props.bg+')'
  }

  return(
    <div class="shards-hero" style={styles}>
      <div class="shards-hero hero-header">
        { props.header }
      </div>
      <div class="shards-hero hero-content">
        <Container>
          <Row>
            <Col sm="12">
              <h1 class="text-center">{props.title}</h1>
              <p class="text-center">{props.tagline}</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="shards-hero hero-footer">
        {props.footer}
        <button class="btn">{props.action}</button>
      </div>
    </div>
  )
}
