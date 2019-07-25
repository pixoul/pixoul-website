import React from "react"
import { Route, withRouter } from "react-router-dom"

import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "utils/hero/hero"
import CapabilitiesCollection from "capabilities/capabilities-collection/capabilities-collection"
import PartnerIndustries from "capabilities/partner-industries/partner-industries"
import Reviews from "capabilities/reviews/reviews"

import bg from "capabilities/bg07.png"
import phone from "capabilities/phone-mockup.png"

import Strategy from "capabilities/strategy/strategy"
import Design from "capabilities/design/design"
import Technology from "capabilities/technology/technology"

function Capabilities({ match }){
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

      <PartnerIndustries />

      <Reviews />

      <Route path={`${match.path}/strategy`} component={Strategy} />
      <Route path={`${match.path}/design`} component={Design} />
      <Route path={`${match.path}/technology`} component={Technology} />
    </div>
  )
}

export default withRouter(Capabilities)
