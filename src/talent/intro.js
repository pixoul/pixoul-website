import React from "react"
/* Third-Party */
import { Link } from "react-router-dom"
import * as typeformEmbed from '@typeform/embed'
/* Utils */
import Button from "utils/button/button"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
/* Images */
import laptop from "./images/laptop.png"

const Intro = () => {
  const openForm = () => {
    typeformEmbed.makePopup('https://pixoulinc.typeform.com/to/sMpWk0', {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true
    })
  }
  return(
    <div className="intro-section">
      <div className="intro-content">
        <Typography variant="header1">Expert Talent.</Typography>
        <Typography variant="subtitle1">Discover why leading companies trust our talent network with their most complex implementations.</Typography>

        <Animate delay={300} once>
          <div className="button-group">
            <Button component="a" onClick={openForm}>Hire the Perfect Match</Button>
          </div>
        </Animate>
      </div>
      <div className="intro-media">
        <Animate type="slideLeft" delay={300} partial once>
          <img src={laptop} alt={laptop} className="intro-image" />
        </Animate>
      </div>
    </div>
  )
}
export default Intro
