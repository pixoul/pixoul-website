import React from "react";
import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "utils/hero/hero"
import CapabilitiesCollection from "capabilities/capabilities-collection/capabilities-collection"
import LatestWork from "work/latest-work/latest-work"

import bg from "home/bg.png"
import favicon from "images/favicon.svg"

export default function Home() {
  return(
    <div>
      <Header />

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

      <LatestWork />

      <CapabilitiesCollection />

      <Footer />
    </div>
  )
}
