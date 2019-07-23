import React from "react";

import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "Utils/Hero/Hero"
import bg from "images/bg08.png"
import favicon from "images/favicon.svg"
import arrow from "images/arrow_down.svg"
import browser from "images/browser_window.svg"

export default function About() {
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
        <HeroAction />
        <HeroMedia media={browser} />
      </HeroFooter>
    </Hero>

    </div>
  )
}
