import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import person from "./images/person.svg"

const FeaturedMember = () => (
  <div className="featured-member">
    <img src={person} alt={person} className="member-media" />
    <div className="member-content">
      <Typography variant="subtitle2">Featured Team Member</Typography>
      <Typography variant="quote">Hello, I'm Kenny Kimmel, a UX/UI Designer and Front End Developer, based in New York.</Typography>
      <Typography variant="body1">I originally started freelancing on a few popular marketplaces, but felt unsupported in my work.  Since then, I’ve joined the Pixoul network where I’ve worked with enterprise-level clients, and built my business with one-on-one mentoring.  Instead of just freelancing, I’m constanly plugged in to a network that empowers me to grow my business, everday.</Typography>

      <Animate delay={300} once>
        <div className="member-action">
          <Button component={Link} to="/contact/join-team">Join the Team</Button>
        </div>
      </Animate>
    </div>
  </div>
)

export default FeaturedMember
