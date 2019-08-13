import React, { useRef } from "react";
import "./home.scss"
/* Utility Components */
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroText, HeroAction} from "utils/hero/hero"
import Button from "utils/button/button"
/* Presentational Components */
import PixoulDifference from "./pixoul-difference"
/* Images */
import bg from "./images/bg.png"
import logoBg from "./images/logo-bg.png"
import favicon from "./images/favicon.svg"
import ipad from "./images/ipad.svg"

export default function Home() {
  const sectionEl = useRef(null)

  const heroClick = () => {
    sectionEl.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return(
    <div className="home">

      <div className="intro-section">
        <h1 className="intro-text">On Demand IT Talent,</h1>
        <h1 className="intro-text">Simplified.</h1>
        <div className="button-group">
          <Button>Hire the Perfect Match</Button>
          <Button outline>Join the Team</Button>
        </div>
        <div className="intro-media">
          <img src={ipad} alt={ipad} className="intro-image" />
        </div>
      </div>

      <PixoulDifference />

    </div>
  )
}
