import React from "react"

import ClientSummary from "utils/client-summary/client-summary"

import bg from "./images/bg.png"
import logo from "./images/logo-color.svg"

export default function Sofs(){
  return(
    <ClientSummary
      logo={logo}
      action="/work/detail/sofs"
      media={bg}
      tagline="is taking field analytics to a whole new level."
    />
  )
}
