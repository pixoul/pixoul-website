import React from "react";
import { Container, Row, Col } from "shards-react";

import Hero from "Utils/Hero/Hero"
import Feature from "Utils/Feature/Feature"

import bg from "images/bg.png"
import favicon from "images/favicon.svg"
import arrow from "images/arrow_down.svg"

import { faPowerOff, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return(
    <div>
      <Hero
        bg={bg}
        image={<img src={favicon} />}
        title="We’re a digital services firm with a focus on design, technology, and strategic innovation."
        tagline="See how we help ambitious brands dominate digital."
        action={<img src={arrow} />}
      />

      <Container>
        <Row>
          <Col>
            <Feature
              title="Strategy"
              tagline="Reimagine and redefine your organizational approach by developing new ways of attaining mission-critical KPIs."
              actionLink="/capabilities/strategy"
              actionText="Learn More"
              icon={faPowerOff}
            />
          </Col>
          <Col>
            <Feature
              title="Design Thinking"
              tagline="Use Design Thinking to create products, services, systems, and experiences that address core needs of your target users."
              actionLink="/capabilities/design"
              actionText="Learn More"
              icon={faPaintBrush}
            />
          </Col>
          <Col>
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

    </div>
  )
}
