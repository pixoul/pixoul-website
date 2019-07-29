import React from "react"
import "./strategy.scss"
/* Third-Party Packages */
import { Container, Row, Col } from "shards-react";
import { faPhoneLaptop, faPaintBrush, faExpandWide, faUsersClass, faWheelchair, faUserCheck } from '@fortawesome/pro-light-svg-icons'

/* Utility Components */
import { Hero, HeroContent, HeroTitle, HeroTagline} from "utils/hero/hero"
import { ParallelDisplay, ParallelContent, ParallelList, ParallelItem, ParallelImage, ParallelText } from "utils/parallel-display/parallel-display"
import { Feature, FeatureHeader, FeatureTitle, FeatureIcon, FeatureTagline } from "utils/feature/feature"
import Opening from "utils/opening/opening"

/* Images */
import bg from "./images/hero-background.jpg"
import designWorkshops from "./images/design-workshops.jpg"
import analyticInsights from "./images/analytic-insights.jpg"
import digitalAudits from "./images/digital-audits.jpg"
import digitalPlanning from "./images/digital-planning.jpg"

export default function Strategy(){
  return(
    <div>
      <Hero bg={bg} theme="dark" align="left" height={520}>
        <HeroContent>
          <HeroTagline text="Our strategic solutions reduce risk." color="#2ec986" size={22}/>
          <HeroTitle text="We’ll work with you to find solutions to your most complex challenges." width={689} size={45} />
        </HeroContent>
      </Hero>

      <div className="section white bottom-gutter">
        <ParallelDisplay>
          <ParallelContent leftGutter={150}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="01. Design Thinking Workshops"
            />
            <ParallelText
              width={530}
              size={20}
              text="As a design community, we believe human interaction is at the heart of everything we build."
            />

            <ParallelList>
              <ParallelItem
                title="Collaborative Design"
                tagline="Work with everyone—from analysts to C-Suite executives."
              />

              <ParallelItem
                title="KPI-Based Outcomes"
                tagline="Build a strategy that delivers maximum, scalable impact."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={designWorkshops} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey bottom-gutter">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={analyticInsights} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="02. Data Insights & Analytics"
            />
            <ParallelText
              width={530}
              size={20}
              text="Our research teams believe transformational strategy starts with powerful data and a focus on consumer insights."
            />

            <ParallelList>
              <ParallelItem
                title="Digging Deeper"
                tagline="Understand user sentiment and unlock market potential."
              />

              <ParallelItem
                title="Capitalize on ROI"
                tagline="Identify new revenue streams and find your digital voice."
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
              text="03. Comprehensive Digital Audits"
            />
            <ParallelText
              width={530}
              size={20}
              text="Backed with data, we help you uncover new ways of presenting your digital message."
            />

            <ParallelList>
              <ParallelItem
                title="Start with a Benchmark"
                tagline="Analyze industry trends and determine your unique value."
              />

              <ParallelItem
                title="Understand the Market"
                tagline="Find unfulfilled marketspace to craft the right presence."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={digitalAudits} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey bottom-gutter">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={digitalPlanning} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="04. Digital Planning & Roadmapping"
            />
            <ParallelText
              width={530}
              size={20}
              text="We know each project is unique, and every digital landscape has its own challenges."
            />

            <ParallelList>
              <ParallelItem
                title="In-Depth Strategy"
                tagline="Provide a complete guide—timelines, budgets, and more. "
              />

              <ParallelItem
                title="The Road Ahead"
                tagline="Know what’s coming up next with our roadmapping services."
              />
            </ParallelList>
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section white">
        <Opening
          title="Our strategy capabilities."
          subtitle="Our digital strategy ensures impactful management across the project lifecycle."
        />

        <Container className="strategy-capabilities">
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
                  <FeatureTitle text="Rapid Prototyping" />
                </FeatureHeader>
                <FeatureTagline text="Our iterative, agile methodology promotes a fail-fast approach to designing and implementation." />
              </Feature>
            </Col>

            <Col sm="12" md="4">
              <Feature width={343} >
                <FeatureHeader>
                  <FeatureIcon icon={faUsersClass} color="#3180fb" />
                  <FeatureTitle text="Collaborative Design" />
                </FeatureHeader>
                <FeatureTagline text="Our work takes place at the intersection of business objectives, user needs, and IT capabilities." />
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
