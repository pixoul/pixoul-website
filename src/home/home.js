import React, { useRef } from "react";
import "./home.scss"
/* Utility Components */
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroText, HeroAction} from "utils/hero/hero"
import Button from "utils/button/button"
import VideoPlayer from "utils/video-player/video-player"
import Stat from "utils/stat/stat"
/* Presentational Components */
import PixoulDifference from "./pixoul-difference"
import TrustedCompanies from "./trusted-companies"
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

      <TrustedCompanies />

      <div className="pixoul-video gutters">
        <div className="video-content">
          <h1 className="video-title">Top Designers, Developers, and Project Managers.</h1>
          <p className="video-description"> Pixoul matches talent for industry-leading organizations, from startups to the Fortune 500.</p>
          <p className="video-description">Our remote team members are more than freelancers—they’re career-focused individuals who invest their reputation in every project.</p>
        </div>
        <div className="video-area">
          <VideoPlayer />
        </div>
      </div>

      <div className="quality-performance">
        <h1 className="quality-title">Quality and Perfomance.</h1>
        <h4 className="quality-tagline">Our most impressive stats speak for themselves.</h4>

        <div className="quality-stats">
          <Stat
            value="1.5+"
            description="Average Project Length (Yrs.)"
            progress={75}
          />

          <Stat
            value="$250M"
            description="Value of Delivered Solutions"
            progress={60}
          />

          <Stat
            value="300+"
            description="Team Members Already Working"
            progress={35}
          />
        </div>

      </div>

    </div>
  )
}
