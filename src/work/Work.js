import React from "react"

import ClientSummary from "utils/client-summary/client-summary"

import bg from "./iuzeit/bg01.png"
import logo from "./iuzeit/iuzeit.svg"

export default function Work(){
  return(
    <div>

      <ClientSummary
        logo={logo}
        action="/work/detail/iuzeit"
        media={bg}
        tagline="is shapping the future of the online purchase journey"
      />
    </div>
  )
}
