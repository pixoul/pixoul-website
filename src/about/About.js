import React from "react";

import Hero from "Utils/Hero/Hero"
import bg from "images/bg08.png"
import favicon from "images/favicon.svg"
import arrow from "images/arrow_down.svg"
import browser from "images/browser_window.svg"

export default function About() {
  return(
    <div>
      <Hero
        bg={bg}
        image={<img src={favicon} />}
        title="Complex problems deserve elegant solutions."
        tagline={<img src={browser} />}
        action={<img src={arrow} />}
      />

    </div>
  )
}
