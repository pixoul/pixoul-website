import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Util */
import Button from "utils/button/button"
import Opening from "utils/opening/opening"

const NetworkHero = () => (
  <div className="network-hero">

    <Opening
      title="Tap Into Our Network."
      subtitle="Scaling and managing the best on demand talent has never been faster or easier."
    />

    <Button component={Link} to="/contact">Get Started</Button>

  </div>
)

export default NetworkHero
