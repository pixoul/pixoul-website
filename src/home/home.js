import React, { useRef } from "react";
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "utils/hero/hero"
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
      <Hero bg={bg} theme="light" align="center" offset={120}>
        <HeroContent>
          <HeroTitle text="We’ll help you" />

        </HeroContent>
        <HeroFooter>
          <HeroTagline text="See how we help ambitious brands dominate digital." />
          <HeroAction gutterTop={31} gutterBottom={0} action={heroClick} />
        </HeroFooter>
      </Hero>
      <div ref={sectionEl}>
        <ClientLatest />
      </div>

      <CapabilitiesCollection />
    </div>
  )
}
