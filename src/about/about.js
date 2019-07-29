import React from "react";

import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "utils/hero/hero"
import bg from "./images/bg.png"
import browser from "./images/browser-window.svg"

import PartnerStats from "about/partner-stats/partner-stats"
import OurValue from "about/our-value/our-value"
import PartnerNetwork from "about/partner-network/partner-network"

export default function About() {
  return(
    <div>
    <Header />
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
          <HeroAction gutterTop={63} />
          <HeroMedia media={browser} />
        </HeroFooter>
      </Hero>

      <PartnerStats />

      <OurValue />

      <PartnerNetwork />
    <Footer />
    </div>
  )
}
