import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
import cn from "classnames"
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Opening from "utils/opening/opening"
import Button from "utils/button/button"

const ComparisonList = ({
  title,
  action,
  items = [],
  type = 'check',
  className
}) => {

  const classes = cn('comparison-list', {
    'check': type === 'check',
    'times': type === 'times'
  })

  return (
    <div className={className}>
      <ul className={classes}>
        <li>{title}</li>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <li>{action}</li>
      </ul>
    </div>
  )
}

const Comparison = () => (
  <div className="comparison gutters">
    <Opening title="How We Compare." />

    <Container fluid>
      <Row nogutter>
        <Col sm={12} md={4}>
          <ComparisonList
            title="Pixoul"
            items={["Top 1% of Tech Talent", "Primarily US Based", "Niche Industry Verticals", "Long-Term Commitment", "Dedicated Account Manager"]}
            action={<Button tag={Link} to="/contact">Get in Touch</Button>}
            className="blue-background"
          />
        </Col>
        <Col sm={12} md={4}>
          <ComparisonList
            type="times"
            title="Marketplaces"
            items={["Poorly Vetted Talent", "Language Barriers", "Generalized Verticals", "Low Retention Rates", "No Account Managers"]}
            action={<Button tag={Link} to="/contact" theme="light" outline>Find an Alternative</Button>}
          />
        </Col>
        <Col sm={12} md={4}>
          <ComparisonList
            type="times"
            title="Agencies"
            items={["Highly Expensive", "Short-Term Commitment", "High Failure Rate", "Slow Onboarding", "Low Scalability"]}
            action={<Button tag={Link} to="/contact" theme="light" outline>Find an Alternative</Button>}
          />
        </Col>
      </Row>
    </Container>

  </div>
)

export default Comparison
