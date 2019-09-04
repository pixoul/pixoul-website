import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Util */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import kpiBg from "./images/kpi-bg.png"

const KPIHero = () => (
  <div className="kpi-hero" style={{
    backgroundImage: `url(${kpiBg})`
  }}>

    <Typography variant="header1" color="white" align="center">Get Your KPIs Back On Track.</Typography>
    <Typography variant="subtitle1" color="white" align="center">Hit your fiscal year goals earlier than expected.</Typography>

    <Animate delay={300} once>
      <Button component={Link} to="/contact/professional-hire">Get in Touch</Button>
    </Animate>
  </div>
)

export default KPIHero
