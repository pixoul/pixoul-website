import React from "react"

import ClientSummary from "utils/client-summary/client-summary"

import bg from "./images/bg.png"
import logo from "./images/logo-color.png"

export default function Summary(){
  return(
    <ClientSummary
      logo={logo}
      action="/work/detail/hcp"
      media={bg}
      tagline="is setting the standard in healthcare—literally."
    />
  )
}
