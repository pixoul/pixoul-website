import React from "react"
/* Third-Party */
import * as typeformEmbed from '@typeform/embed'
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import ipad from "./images/ipad.svg"

const Intro = () => {
  const openHireForm = () => {
    typeformEmbed.makePopup('https://pixoulinc.typeform.com/to/sMpWk0', {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true
    })
  }

  const openTeamForm = () => {
    typeformEmbed.makePopup('https://pixoulinc.typeform.com/to/fD6XxD', {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true
    })
  }

  return(
    <div className="intro-section">
      <Typography variant="header1" align="center">On Demand IT Talent, <br /> Simplified.</Typography>

      <Animate delay={300} once>
        <div className="button-group">
          <Button component="a" onClick={openHireForm}>Hire the Perfect Match</Button>
          <Button outline component="a" onClick={openTeamForm}>Join the Team</Button>
        </div>
      </Animate>

      <div className="intro-media">
        <img src={ipad} alt={ipad} className="intro-image" />
      </div>
    </div>
  )
}

export default Intro
