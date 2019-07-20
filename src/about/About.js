import React from "react";

import Hero from "common/Hero/Hero"
import bg from "images/bg.png"
import favicon from "images/favicon.svg"
import arrow from "images/arrow_down.svg"

export default function About() {
  return(
    <div>
      <Hero
        bg={bg}
        image={<img src={favicon} />}
        title="Complex problems deserve elegant solutions."
        tagline="We help brands and organizations succeed in the digital age."
        action={<img src={arrow} />}
      />
    </div>
  )
}
