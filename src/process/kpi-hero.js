import React from "react"
/* Third-Party */
import * as typeformEmbed from '@typeform/embed'
/* Util */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import kpiBg from "./images/kpi-bg.png"

const KPIHero = () => {
  const openHireForm = () => {
    typeformEmbed.makePopup('https://pixoulinc.typeform.com/to/sMpWk0', {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true
    })
  }

  return(
    <div className="kpi-hero" style={{
      backgroundImage: `url(${kpiBg})`
    }}>

      <Typography variant="header1" color="white" align="center">Get Your KPIs Back On Track.</Typography>
      <Typography variant="subtitle1" color="white" align="center">Hit your fiscal year goals earlier than expected.</Typography>

      <Animate delay={300} once>
        <Button component="a" onClick={openHireForm}>Get in Touch</Button>
      </Animate>
    </div>
  )
}

export default KPIHero
