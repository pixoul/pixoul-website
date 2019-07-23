import React from "react"

import FeatureCollection from "Capabilities/FeatureCollection/FeatureCollection"
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "Utils/Hero/Hero"

import bg from "Capabilities/bg07.png"
import phone from "Capabilities/phone-mockup.png"

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

      <FeatureCollection />
    </div>
  )
}
