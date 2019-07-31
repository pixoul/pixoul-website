import React, { useRef } from "react"
import { withRouter, Route } from "react-router-dom"

import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroArrow, HeroTagline} from "utils/hero/hero"
import CapabilitiesCollection from "capabilities/capabilities-collection/capabilities-collection"
import PartnerIndustries from "capabilities/partner-industries/partner-industries"
import Reviews from "capabilities/reviews/reviews"

import Strategy from "capabilities/strategy/strategy"
import Design from "capabilities/design/design"
import Technology from "capabilities/technology/technology"

import bg from "./images/bg.png"
import phone from "./images/phone-mockup.png"

function Page(){
  const sectionEl = useRef(null)

  const heroClick = () => {
    sectionEl.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return(
    <div>
        <Hero bg={bg} theme="light" align="left">
          <HeroContent>
            <HeroTitle text="How can we help?" width={475} size={65} />
            <HeroTagline text="We’re here to bring life to your digital vision. Got a project in mind? Let’s talk." />
            <HeroArrow action={heroClick} type="white" />
          </HeroContent>
          <HeroFooter>
            <HeroMedia media={phone} width={350} />
          </HeroFooter>
        </Hero>

        <div ref={sectionEl}>
          <CapabilitiesCollection />
        </div>

        <PartnerIndustries />

        <Reviews />
    </div>
  )
}


function Capabilities({ match }){
  return(
    <div>
      <Header />
        <Route exact path={`${match.path}/`} component={Page} />
        <Route path={`${match.path}/strategy`} component={Strategy} />
        <Route path={`${match.path}/design`} component={Design} />
        <Route path={`${match.path}/technology`} component={Technology} />
      <Footer />
    </div>
  )
}

export default withRouter(Capabilities)
