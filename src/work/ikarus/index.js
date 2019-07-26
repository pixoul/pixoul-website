import React from "react"

import ClientSummary from "utils/client-summary/client-summary"

import bg from "./images/bg.png"
import logo from "./images/logo-color.svg"

export default function Summary(){
  return(
    <ClientSummary
      logo={logo}
      action="/work/detail/ikarus"
      media={bg}
      tagline="is redefining the business marketplace."
    />
  )
}
