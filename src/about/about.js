import React, { useRef } from "react";
import "./about.scss"
import { Hero, HeroMedia, HeroText, HeroAction} from "utils/hero/hero"
import Button from "utils/button/button"
import Capability from "utils/capability/capability"
import Map from "utils/map/map"
import bg from "./images/bg.png"
import browser from "./images/browser-window.svg"

export default function About() {
  const sectionEl = useRef(null)

  const heroClick = () => {
    sectionEl.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return(
    <div className="about">
      <div className="intro-section gutters">
        <div className="intro-content">
          <h4 className="intro-tagline">HIGH PERFORMING TALENT, ON DEMAND.</h4>
          <h1 className="intro-title">Welcome to your elite talent network.</h1>
          <p className="intro-text">We hire world-class designers, developers and project managers.  Pixoul talent contributes to the most innovative and profitable companies across the globe. </p>

          <div className="button-group">
            <Button theme="secondary">Hire the Perfect Match</Button>
            <Button theme="secondary" outline>Join the Team</Button>
          </div>
        </div>
        <div className="intro-media">

        </div>
      </div>

      <div>
        <Capability
          direction='rtl'
          mediaComponent={<Map />}
          title='Augmented IT Talent.'
          subtitle='Utilize our full-time or hourly based freelancers to harness technical debt, combat roadmap scope creep, or fill knowledge gaps within your organization.'
        />

        <Capability
          direction='ltr'
          mediaComponent={<Map />}
          title='Full team Support.'
          subtitle='Our network can help you source a full team of designers, developers, and project managers—ensuring your next digital project is a smooth success.'
        />
      </div>

    </div>
  )
}
