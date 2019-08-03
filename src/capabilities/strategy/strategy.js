import React from "react"
import "./strategy.scss"
/* Third-Party Packages */
import { Container, Row, Col } from "shards-react";
/* Utility Components */
import { Hero, HeroContent, HeroText} from "utils/hero/hero"
import { Feature, FeatureHeader, FeatureTitle, FeatureIcon, FeatureTagline } from "utils/feature/feature"
import Opening from "utils/opening/opening"
import Capability from "utils/capability/capability"
/* Images */
import bg from "./images/hero-background.jpg"
/* Icons */
import screens from "./images/screens.svg"
import brush from "./images/brush.svg"
import expand from "./images/expand.svg"
import devices from "./images/devices.svg"
import plus from "./images/plus.svg"
import reload from "./images/reload.svg"
/* Capability Data */
import data from "./data"

export default function Strategy(){
  return(
    <div>
      <Hero bg={bg} theme="dark" align="left" height={520}>
        <HeroContent>
          <HeroText text="Our strategic solutions reduce risk." color="#2ec986" size={22}/>
          <HeroText text="We’ll work with you to find solutions to your most complex challenges." width={689} size={45} />
        </HeroContent>
      </Hero>

      {data.map((item, i) => (
        <div key={i}>
          <Capability {...item}  />
        </div>
      ))}

      <div className="section white bottom-offset">
        <Opening
          title="Our strategy capabilities."
          subtitle="Our digital strategy ensures impactful management across the project lifecycle."
        />

        <Container className="strategy-capabilities">
          <Row>
            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon svg={screens} />
                  <FeatureTitle text="User Experience Design" />
                </FeatureHeader>
                <FeatureTagline text="By combining data insights with psychology research, we’re redefining digital." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon svg={brush} />
                  <FeatureTitle text="User Interface Design" />
                </FeatureHeader>
                <FeatureTagline text="Beautiful interfaces begin with clean, familiar design systems that encourage easy use." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon svg={expand} />
                  <FeatureTitle text="Rapid Prototyping" />
                </FeatureHeader>
                <FeatureTagline text="Our iterative, agile methodology promotes a fail-fast approach to designing and implementation." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon svg={devices} />
                  <FeatureTitle text="Collaborative Design" />
                </FeatureHeader>
                <FeatureTagline text="Our work takes place at the intersection of business objectives, user needs, and IT capabilities." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon svg={plus} />
                  <FeatureTitle text="Accessibility" />
                </FeatureHeader>
                <FeatureTagline text="From color blindness to varying devices, we regard WCAG guidelines for a positive experience for all." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon svg={reload} />
                  <FeatureTitle text="User Testing" />
                </FeatureHeader>
                <FeatureTagline text="No design experience is successful without targeted user feedback, and iterative testing." />
              </Feature>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}
