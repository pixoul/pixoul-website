import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
/* Images */
import person from "./images/person.svg"

const FeaturedMember = () => (
  <div className="featured-member">
    <div className="member-media">
      <img src={person} alt={person} />
    </div>
    <div className="member-content">
      <Typography variant="h6" color="primary" align="left" weight="bold" transform="uppercase">Featured Team Member</Typography>
      <Typography variant="h3" color="primary" align="left">Hello, I'm Kenny Kimmel, a UX/UI Designer and Front End Developer, based in New York.</Typography>
      <Typography variant="p" color="secondary" align="left">I originally started freelancing on a few popular marketplaces, but felt unsupported in my work.  Since then, I’ve joined the Pixoul network where I’ve worked with enterprise-level clients, and built my business with one-on-one mentoring.  Instead of just freelancing, I’m constanly plugged in to a network that empowers me to grow my business, everday.</Typography>

      <div className="member-action">
        <Button tag={Link} to="/contact/join-team">Join the Team</Button>
      </div>
    </div>
  </div>
)

export default FeaturedMember
