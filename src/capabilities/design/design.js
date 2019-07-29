import React from "react"
import "./design.scss"
/* Third-Party Packages */
import { Container, Row, Col } from "shards-react";
import { faPhoneLaptop, faPaintBrush, faExpandWide, faChalkboard, faWheelchair, faUserCheck } from '@fortawesome/pro-light-svg-icons'

/* Utility Components */
import { Hero, HeroContent, HeroTitle, HeroTagline} from "utils/hero/hero"
import { ParallelDisplay, ParallelContent, ParallelList, ParallelItem, ParallelImage, ParallelText } from "utils/parallel-display/parallel-display"
import { Feature, FeatureHeader, FeatureTitle, FeatureIcon, FeatureTagline } from "utils/feature/feature"
import Opening from "utils/opening/opening"

/* Images */
import bg from "./images/hero-background.jpg"
import designThinking from "./images/design-thinking.jpg"
import userExperience from "./images/user-experience.jpg"
import userInterface from "./images/user-interface.jpg"
import iterativeTesting from "./images/iterative-testing.jpg"

export default function Design(){
  return(
    <div>
      <Hero bg={bg} theme="dark" align="left" height={520}>
        <HeroContent>
          <HeroTagline text="Digital experience matters." color="#2ec986" size={22}/>
          <HeroTitle text="Human-centered design empowers us to rethink user’s needs." width={689} size={45} />
        </HeroContent>
      </Hero>

      <div className="section white bottom-gutter">
        <ParallelDisplay>
          <ParallelContent leftGutter={150}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="01. Design Thinking Process"
            />
            <ParallelText
              width={530}
              size={20}
              text="Supported by our data and research initiatives, we use industry proven Design Thinking techniques to promote strong user- and human-centered design."
            />

            <ParallelList>
              <ParallelItem
                title="Empathy + Creativity"
                tagline="Design to make purposeful impact on entire communitites."
              />

              <ParallelItem
                title="The Three I’s"
                tagline="Inspire, ideate, and implement solutions that matter."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={designThinking} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey bottom-gutter">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={userExperience} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="02. User Experience (UX) Design"
            />
            <ParallelText
              width={530}
              size={20}
              text="Compelling digital experiences begin with an understanding of your goals.  "
            />

            <ParallelList>
              <ParallelItem
                title="Brainstorming"
                tagline="Ensure product is accessible, innovative, and empathetic."
              />

              <ParallelItem
                title="Great Design"
                tagline="Create value propositions and dive into product culture."
              />
            </ParallelList>
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section white bottom-gutter">
        <ParallelDisplay>
          <ParallelContent leftGutter={150}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="03. User Interface (UI) Design"
            />
            <ParallelText
              width={530}
              size={20}
              text="We know great experiences neccessitate a beautiful design aesthetic."
            />

            <ParallelList>
              <ParallelItem
                title="Modern, Clean Design"
                tagline="Captivate with an easy-to-use design that’s equally stunning."
              />

              <ParallelItem
                title="Scalable Systems"
                tagline="Become device-agnostic with motion interaction."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={userInterface} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey bottom-gutter">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={iterativeTesting} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="04. Iterative Testing & Analysis"
            />
            <ParallelText
              width={530}
              size={20}
              text="Design begins with great research—and it ends with it, too. "
            />

            <ParallelList>
              <ParallelItem
                title="Agile Approach"
                tagline="Testing and iterative design is baked-in to every sprint cycle."
              />

              <ParallelItem
                title="Bottom-Line Economics"
                tagline="Utilize data-driven field studies, guerilla tests, focus groups, etc."
              />
            </ParallelList>
          </ParallelContent>
        </ParallelDisplay>
      </div>

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
                <FeatureTagline text="No design experience is successful without without targeted user feedback, and iterative testing." />
              </Feature>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}
