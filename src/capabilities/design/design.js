import React from "react"
import "./design.scss"
/* Third-Party Packages */
import { Container, Row, Col } from "shards-react";
import { faPhoneLaptop, faPaintBrush, faExpandWide, faChalkboard, faWheelchair, faUserCheck } from '@fortawesome/pro-light-svg-icons'

/* Utility Components */
import { Hero, HeroContent, HeroTitle, HeroTagline} from "utils/hero/hero"
import { Feature, FeatureHeader, FeatureTitle, FeatureIcon, FeatureTagline } from "utils/feature/feature"
import Opening from "utils/opening/opening"
import Capability from "utils/capability/capability"

/* Images */
import bg from "./images/hero-background.jpg"
import data from "./data"

export default function Design(){
  return(
    <div>
      <Hero bg={bg} theme="dark" align="left" height={520}>
        <HeroContent>
          <HeroTagline text="Digital experience matters." color="#2ec986" size={22}/>
          <HeroTitle text="Human-centered design empowers us to rethink user’s needs." width={689} size={45} />
        </HeroContent>
      </Hero>

      {data.map((item, i) => (
        <Capability {...item} />
      ))}

      <div className="section white">
        <Opening
          title="Our design capabilities."
          subtitle="We believe good design is grounded in human understanding."
        />

        <Container className="design-capabilities">
          <Row>
            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon icon={faPhoneLaptop} color="#3180fb" />
                  <FeatureTitle text="User Experience Design" />
                </FeatureHeader>
                <FeatureTagline text="By combining data insights with psychology research, we’re redefining digital." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon icon={faPaintBrush} color="#3180fb" />
                  <FeatureTitle text="User Interface Design" />
                </FeatureHeader>
                <FeatureTagline text="Beautiful interfaces begin with clean, familiar design systems that encourage easy use." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon icon={faExpandWide} color="#3180fb" />
                  <FeatureTitle text="Motion & Interaction" />
                </FeatureHeader>
                <FeatureTagline text="Interaction animation is at the forefront on emplying an engaging digital experience." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon icon={faChalkboard} color="#3180fb" />
                  <FeatureTitle text="Content Production" />
                </FeatureHeader>
                <FeatureTagline text="Good design affords for your digital message, and meticulously crafts a compelling story. " />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon icon={faWheelchair} color="#3180fb" />
                  <FeatureTitle text="Accessibility" />
                </FeatureHeader>
                <FeatureTagline text="From color blindness to varying devices, we regard WCAG guidelines for a positive experience for all." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon icon={faUserCheck} color="#3180fb" />
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
