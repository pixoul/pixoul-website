import React from "react"

import ClientSummary from "utils/client-summary/client-summary"

import bg from "./bg01.png"
import logo from "./iuzeit.svg"

export default function Iuzeit(){
  return(
    <ClientSummary
      logo={logo}
      action="/work/detail/iuzeit"
      media={bg}
      tagline="is shapping the future of the online purchase journey"
    />
  )
}
