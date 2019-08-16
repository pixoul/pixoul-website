import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Opening from "utils/opening/opening"
import Feature from "utils/feature/feature"

/* Icons */
import check from "./images/icons/check.svg"
import times from "./images/icons/times.svg"
import user from "./images/icons/user.svg"
import search from "./images/icons/search.svg"
import plane from "./images/icons/plane.svg"
import rocket from "./images/icons/rocket.svg"
/* Images */
import candadite1 from "./images/candadites/candadite-1.png"
import candadite2 from "./images/candadites/candadite-2.png"
import candadite3 from "./images/candadites/candadite-3.png"
import candadite4 from "./images/candadites/candadite-4.png"
import candadite5 from "./images/candadites/candadite-5.png"
import candadite6 from "./images/candadites/candadite-6.png"
import candadite7 from "./images/candadites/candadite-7.png"
import candadite8 from "./images/candadites/candadite-8.png"


const Candadite = ({
  media,
  accepted = false
}) => (
  <div className="candadite">
    <img src={media} alt={media} className="candadite-image" />
    <img src={accepted ? check : times} alt={accepted ? check : times} className="candadite-status"/>
  </div>
)



const Matching = () => (
  <div className="matching gutters">
    <div className="matching-content">
      <Opening
        align="left"
        title="White Glove Matching."
        subtitle="Powered by our prorpietary AI, we narrow down your talent pool by matching on skills, industry experience, availability, location, and more.  Then, Pixoul hand-selects and presents your team for approval."
      />

      <Container>
        <Row nogutter>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="1. TELL US YOUR NEEDS"
              media={user}
              description="Work with your dedicated account manager."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="2. IDENTIFY CRITERIA"
              media={search}
              description="Prioritize skill, timezone, communication, and more."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="3. GIVE JOB DETAILS"
              media={plane}
              description="Use our online platform to create your job."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="4. LET US DO THE REST"
              media={rocket}
              description="We’ll manually select the best fit based on your needs."
            />
          </Col>
        </Row>
      </Container>

    </div>
    <div className="matching-media">
      <Candadite media={candadite1} accepted={true} />
      <Candadite media={candadite2} accepted={true} />
      <Candadite media={candadite3} accepted={false} />
      <Candadite media={candadite4} accepted={true} />
      <Candadite media={candadite5} accepted={true} />
      <Candadite media={candadite6} accepted={false} />
      <Candadite media={candadite7} accepted={true} />
      <Candadite media={candadite8} accepted={false} />
    </div>
  </div>
)

export default Matching
