import React from "react";

import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "Utils/Hero/Hero"
import FeatureCollection from "Capabilities/FeatureCollection/FeatureCollection"

import bg from "Home/bg.png"
import favicon from "images/favicon.svg"

export default function Home() {
  return(
    <div>
      <Hero bg={bg} theme="dark" align="center" offset={120}>
        <HeroContent>
          <HeroMedia media={favicon} />
          <HeroTitle text="We’re a digital services firm with a focus on design, technology, and strategic innovation." />
        </HeroContent>
        <HeroFooter>
          <HeroTagline text="See how we help ambitious brands dominate digital." />
          <HeroAction  />
        </HeroFooter>
      </Hero>

      <FeatureCollection />

    </div>
  )
}
