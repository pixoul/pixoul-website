import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Utils */
import Button from "utils/button/button"
/* Images */
import person from "./images/person.svg"

const FeaturedMember = () => (
  <div className="featured-member">
    <div className="member-media">
      <img src={person} alt={person} />
    </div>
    <div className="member-content">
      <span className="member-tagline">Featured Team Member</span>
      <span className="member-title">Hello, I'm Kenny Kimmel, a UX/UI Designer and Front End Developer, based in New York.</span>
      <span className="member-text">I originally started freelancing on a few popular marketplaces, but felt unsupported in my work.  Since then, I’ve joined the Pixoul network where I’ve worked with enterprise-level clients, and built my business with one-on-one mentoring.  Instead of just freelancing, I’m constanly plugged in to a network that empowers me to grow my business, everday.</span>
      <div className="member-action">
        <Button tag={Link} to="/contact">Join the Team</Button>
      </div>
    </div>
  </div>
)

export default FeaturedMember
