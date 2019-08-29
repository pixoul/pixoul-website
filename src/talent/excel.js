import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
/* Images */
import HeartIcon from "utils/icons/heart"
import SearchIcon from "utils/icons/search"
import DesignIcon from "utils/icons/design"
import DevelopmentIcon from "utils/icons/development"
import ProjectManagementIcon from "utils/icons/project-management"
import heart from "./images/icons/heart.svg"
import search from "./images/icons/search.svg"
import design from "./images/icons/design.svg"
import development from "./images/icons/development.svg"
import pm from "./images/icons/pm.svg"

const Excel = () => (
  <div className="excel gutters">

    <div className="excel-header">
      <HeartIcon color="#276cf2" />
      <Typography variant="h1" color="primary" align="center" weight="bold">Where We Excel.</Typography>
      <Typography variant="p" color="secondary" align="center">We supply the talent you need, right when you need it.  Our network spans skill in programming languages, branding, research, and more.</Typography>
    </div>

    <Container>
      <Row>
        <Col sm={12} md={3}>
          <Feature
            position="top-center"
            title="Research & Strategy"
            icon={<SearchIcon color="#3c3d41" />}
            description="Branding, Messaging, User Sentiment, etc."
          />
        </Col>
        <Col sm={12} md={3}>
          <Feature
            position="top-center"
            title="UX/UI Design"
            icon={<DesignIcon color="#3c3d41" />}
            description="Wireframes, High Fidelity Mockups, User Testing, etc."
          />
        </Col>
        <Col sm={12} md={3}>
          <Feature
            position="top-center"
            title="Development"
            icon={<DevelopmentIcon color="#3c3d41" />}
            description="Front End Implementation, Back End Databases, QA, etc."
          />
        </Col>
        <Col sm={12} md={3}>
          <Feature
            position="top-center"
            title="Project Management"
            icon={<ProjectManagementIcon color="#3c3d41" />}
            description="Agile Scrum, Waterfall Methodologies, etc."
          />
        </Col>
      </Row>
    </Container>
  </div>
)


export default Excel
