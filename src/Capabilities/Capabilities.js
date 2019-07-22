import React from "react"

import FeatureCollection from "Capabilities/FeatureCollection/FeatureCollection"
import Hero from "Utils/Hero/Hero"

import bg from "images/bg07.png"
import arrow from "images/arrow_down.svg"
import phone from "images/phone-mockup.png"

export default function Capabilities(){
  return(
    <div>
      <Hero
        bg={bg}
        image={<img src={phone} />}
        title="How can we help?"
        tagline="We’re here to bring life to your digital vision. Got a project in mind? Let’s talk."
        action={<img src={arrow} />}
        theme="light"
        align="left"
      />

      <FeatureCollection />
    </div>
  )
}
