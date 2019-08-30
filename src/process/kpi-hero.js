import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Util */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
/* Images */
import kpiBg from "./images/kpi-bg.png"

const KPIHero = () => (
  <div className="kpi-hero" style={{
    backgroundImage: `url(${kpiBg})`
  }}>

    <Typography variant="h1" color="white" align="center" weight="bold">Get Your KPIs Back On Track.</Typography>
    <Typography variant="h6" color="white" align="center">Hit your fiscal year goals earlier than expected.</Typography>

    <Button tag={Link} to="/contact">Get in Touch</Button>

  </div>
)

export default KPIHero
