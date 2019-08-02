import React, { useRef } from "react";
import "./home.scss"
/* Utility Components */
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroText, HeroAction} from "utils/hero/hero"
/* Presentational Components */
import CapabilityFeatures from "capabilities/capability-features/capability-features"
import WorkLatest from "work/latest/latest"
/* Images */
import bg from "./images/bg.png"
import logoBg from "./images/logo-bg.png"
import favicon from "./images/favicon.svg"

export default function Home() {
  const sectionEl = useRef(null)

  const heroClick = () => {
    sectionEl.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return(
    <div className="home">
      <Hero bg={bg} theme="light" align="center" >
          <HeroText text="We’ll help you" size={45} />
          <HeroText text="Dominate Digital" size={85} weight="bold" />
          <HeroAction action={heroClick} gutterTop={160} gutterBottom={60} />
      </Hero>
      <div ref={sectionEl} className="features-section" style={{
        backgroundImage: 'url('+logoBg+')'
      }}>

        <h3 className="features-title">We're a digital services firm with a focus on design, technology, and strategic innovation.</h3>
        <CapabilityFeatures background />
      </div>

      <WorkLatest />
    </div>
  )
}
