import React from "react"
/* Third-Party */
import * as typeformEmbed from '@typeform/embed'
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import iphoneFront from "./images/iphone-front.png"
import iphoneBack from "./images/iphone-back.png"

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
    <div className="intro-section gutters">
      <div className="intro-content">
        <Typography variant="subtitle2" color="white" align="left">HIGH PERFORMING TALENT, ON DEMAND.</Typography>
        <Typography variant="header1" color="white" align="left">Welcome to Your Elite Talent Network.</Typography>
        <Typography variant="body1" color="white" align="left" >We hire world-class designers, developers and project managers.  Pixoul talent contributes to the most innovative and profitable companies across the globe.</Typography>

        <Animate delay={300} once>
          <div className="button-group">
            <Button theme="secondary" component="a" onClick={openHireForm}>Hire the Perfect Match</Button>
            <Button theme="white" outline component="a" onClick={openTeamForm}>Join the Team</Button>
          </div>
        </Animate>
      </div>
      <div className="intro-media">
        <img src={iphoneFront} alt={iphoneFront} className="intro-image front" />
        <img src={iphoneBack} alt={iphoneBack} className="intro-image back" />
      </div>
    </div>
  )
}

export default Intro
