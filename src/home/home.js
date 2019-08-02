import React, { useRef } from "react";
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroText, HeroAction, HeroTagline} from "utils/hero/hero"
import CapabilitiesCollection from "capabilities/capabilities-collection/capabilities-collection"
import ClientLatest from "work/latest/latest"

import bg from "./images/bg.png"
import favicon from "./images/favicon.svg"

export default function Home() {
  const sectionEl = useRef(null)

  const heroClick = () => {
    sectionEl.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return(
    <div>
      <Hero bg={bg} theme="light" align="center" >
        <HeroContent>
          <HeroText text="We’ll help you" size={45} />
          <HeroText text="Dominate Digital" size={85} />
          <HeroAction action={heroClick} gutterTop={199} />
        </HeroContent>
      </Hero>
      <div ref={sectionEl}>
        <ClientLatest />
      </div>

      <CapabilitiesCollection />
    </div>
  )
}
