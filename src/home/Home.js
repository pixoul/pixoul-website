import React from "react";

import Hero from "common/Hero/Hero"
import bg from "images/bg.png"
import favicon from "images/favicon.svg"
import arrow from "images/arrow_down.svg"

export default function Home() {
  return(
    <div>
      <Hero
        bg={bg}
        title={<img src={favicon} />}
        tagline="We’re a digital services firm with a focus on design, technology, and strategic innovation."
        action={<img src={arrow} />}
        footer="See how we help ambitious brands dominate digital."
      />
    </div>
  )
}
