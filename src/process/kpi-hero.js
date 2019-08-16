import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
/* Util */
import Button from "utils/button/button"
import Opening from "utils/opening/opening"
/* Images */
import kpiBg from "./images/kpi-bg.png"

const KPIHero = () => (
  <div className="kpi-hero" style={{
    backgroundImage: `url(${kpiBg})`
  }}>

    <Opening
      theme="light"
      title="Get Your KPIs Back On Track."
      subtitle="Hit your fiscal year goals earlier than expected."
    />

    <Button tag={Link} to="/contact">Get in Touch</Button>

  </div>
)

export default KPIHero
