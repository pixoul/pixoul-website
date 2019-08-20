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
  }, className)

  return (
    <ul className={classes}>
      <li>{title}</li>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <li>{action}</li>
    </ul>
  )
}

const Comparison = () => (
  <div className="comparison gutters">
    <Opening title="How We Compare." />

    <div className="comparison-area">
      <ComparisonList
        title="Pixoul"
        items={["Top 1% of Tech Talent", "Primarily US Based", "Niche Industry Verticals", "Long-Term Commitment", "Dedicated Account Manager"]}
        action={<Button tag={Link} to="/contact/professional-hire">Get in Touch</Button>}
        className="blue-background"
      />

      <ComparisonList
        type="times"
        title="Marketplaces"
        items={["Poorly Vetted Talent", "Language Barriers", "Generalized Verticals", "Low Retention Rates", "No Account Managers"]}
        action={<Button tag={Link} to="/contact/professional-hire" theme="light" outline>Find an Alternative</Button>}
      />

      <ComparisonList
        type="times"
        title="Agencies"
        items={["Highly Expensive", "Short-Term Commitment", "High Failure Rate", "Slow Onboarding", "Low Scalability"]}
        action={<Button tag={Link} to="/contact/professional-hire" theme="light" outline>Find an Alternative</Button>}
      />
    </div>
  </div>
)

export default Comparison
