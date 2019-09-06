import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Typography from "utils/typography/typography"
import Button from "utils/button/button"
import ComparisonList from "utils/comparison-list/comparison-list"

const Comparison = () => (
  <div className="comparison">
    <Typography variant="header1" align="center">How We Compare.</Typography>

    <div className="comparison-area">
      <ComparisonList
        type="check"
        title="Pixoul"
        items={["Top 1% of Tech Talent", "Primarily US Based", "Niche Industry Verticals", "Long-Term Commitment", "Dedicated Account Manager"]}
        action={<Button component={Link} to="/contact/professional-hire">Get in Touch</Button>}
        active
      />

      <ComparisonList
        type="times"
        title="Marketplaces"
        items={["Poorly Vetted Talent", "Language Barriers", "Generalized Verticals", "Low Retention Rates", "No Account Managers"]}
        action={<Button component={Link} to="/contact/professional-hire" theme="secondary" outline>Find an Alternative</Button>}
      />

      <ComparisonList
        type="times"
        title="Agencies"
        items={["Highly Expensive", "Short-Term Commitment", "High Failure Rate", "Slow Onboarding", "Low Scalability"]}
        action={<Button component={Link} to="/contact/professional-hire" theme="secondary" outline>Find an Alternative</Button>}
      />
    </div>
  </div>
)

export default Comparison
