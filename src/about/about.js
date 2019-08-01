import React, { useRef } from "react";

import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroArrow, HeroTagline} from "utils/hero/hero"
import Capability from "utils/capability/capability"
import Map from "utils/map/map"
import bg from "./images/bg.png"
import browser from "./images/browser-window.svg"

import PartnerStats from "about/partner-stats/partner-stats"
import OurValue from "about/our-value/our-value"

export default function About() {
  const sectionEl = useRef(null)

  const heroClick = () => {
    sectionEl.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return(
    <div>
      <Hero bg={bg} theme="dark" align="center" offset={250}>
        <HeroContent>
          <HeroTitle
            text="Complex problems deserve elegant solutions."
            width={874}
            size={65}
          />
          <HeroTagline
            text="We help brands and organizations succeed in the digital age."
            width={650}
            size={22}
          />

        </HeroContent>
        <HeroFooter>
          <HeroArrow gutterTop={63} gutterBottom={-60} action={heroClick} />
          <HeroMedia media={browser} />
        </HeroFooter>
      </Hero>

      <div ref={sectionEl}>
        <PartnerStats />
      </div>

      <OurValue />

      <Capability
        direction='ltr'
        mediaComponent={<Map />}
        title='Our partner network is always expanding.'
        subtitle='Headquartered in Dallas, TX, we’re proud to have made an impact on communities around the world.'
        details = {{
          'Team Members': 'Across North America',
          'Clients': 'Around the globe'
        }}
      />
    </div>
  )
}
