import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Util */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"

const NetworkHero = () => (
  <div className="network-hero">
    <div className="hero-header">
      <Typography variant="header1" align="center">Tap Into Our Network.</Typography>
      <Typography variant="subtitle1" align="center">Scaling and managing the best on demand talent has never been faster or easier.</Typography>
    </div>
    <Button component={Link} to="/contact">Get Started</Button>

  </div>
)

export default NetworkHero
