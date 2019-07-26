import React from "react"

import ClientSummary from "utils/client-summary/client-summary"

import bg from "./images/bg.png"
import logo from "./images/logo-color.jpg"

export default function Fusemap(){
  return(
    <ClientSummary
      logo={logo}
      action="/work/detail/fusemap"
      media={bg}
      tagline="is thinking smarter about how we power the world."
    />
  )
}
