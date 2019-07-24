import React from "react"

import CapabilitiesCollection from "capabilities/capabilities-collection/capabilities-collection"
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "utils/Hero/Hero"

import bg from "capabilities/bg07.png"
import phone from "capabilities/phone-mockup.png"

export default function Capabilities(){
  return(
    <div>
      <Hero bg={bg} theme="light" align="left">
        <HeroContent>
          <HeroTitle text="How can we help?" width={475} size={65} />
          <HeroTagline text="We’re here to bring life to your digital vision. Got a project in mind? Let’s talk." />
          <HeroAction />
        </HeroContent>
        <HeroFooter>
          <HeroMedia media={phone} width={350} />
        </HeroFooter>
      </Hero>

      <CapabilitiesCollection />
    </div>
  )
}
