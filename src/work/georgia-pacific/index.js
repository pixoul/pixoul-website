import React from "react"

import ClientSummary from "utils/client-summary/client-summary"

import bg from "./images/bg.png"
import logo from "./images/logo-color.jpg"

export default function GeorgiaPacific(){
  return(
    <ClientSummary
      logo={logo}
      action="/work/detail/georgia-pacific"
      media={bg}
      tagline="is transforming how logistics gets done."
    />
  )
}
