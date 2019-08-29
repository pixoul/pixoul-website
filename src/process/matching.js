import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"

/* Icons */
import CheckIcon from "utils/icons/check"
import TimesIcon from "utils/icons/times"
import UserIcon from "utils/icons/user"
import SearchIcon from "utils/icons/search"
import PlaneIcon from "utils/icons/plane"
import RocketIcon from "utils/icons/rocket"
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
    <div className="candadite-status">
      {accepted ? <CheckIcon color="#276cf2" /> : <TimesIcon color="#ff0000" />}
    </div>
  </div>
)



const Matching = () => (
  <div className="matching">
    <div className="matching-content">
      <Typography variant="h1" color="primary" align="left" weight="bold">White Glove Matching.</Typography>
      <Typography variant="h6" color="secondary" align="left">Powered by our prorpietary AI, we narrow down your talent pool by matching on skills, industry experience, availability, location, and more.  Then, Pixoul hand-selects and presents your team for approval.</Typography>

      <Container>
        <Row nogutter>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="1. TELL US YOUR NEEDS"
              icon={<UserIcon color="#276cf2" />}
              description="Work with your dedicated account manager."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="2. IDENTIFY CRITERIA"
              icon={<SearchIcon color="#276cf2" />}
              description="Prioritize skill, timezone, communication, and more."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="3. GIVE JOB DETAILS"
              icon={<PlaneIcon color="#276cf2" />}
              description="Use our online platform to create your job."
            />
          </Col>
          <Col sm={12} md={6}>
            <Feature
              position="top-left"
              title="4. LET US DO THE REST"
              icon={<RocketIcon color="#276cf2" />}
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
