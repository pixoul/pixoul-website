import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
import * as typeformEmbed from '@typeform/embed'
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import roadmapPromo from "./images/roadmap-promo.png"

const style = {
  backgroundImage: 'url('+roadmapPromo+')'
}

const RoadmapPromo = () => {
  const openHireForm = () => {
    typeformEmbed.makePopup('https://pixoulinc.typeform.com/to/sMpWk0', {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true
    })
  }

  return (
    <div className="roadmap-promo gutters" style={style}>
      <Typography variant="header1" color="white" align="center">Let’s Improve Your Roadmap.</Typography>
      <Typography variant="subtitle1" color="white" align="center">We average a 219% increase in ROI.  Find out how.</Typography>

      <Animate delay={300} once>
        <div className="roadmap-action">
          <Button component="a" onClick={openHireForm}>Get in Touch</Button>
        </div>
      </Animate>
    </div>
  )
}


export default RoadmapPromo
