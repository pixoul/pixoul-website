import React from "react"

import ClientSummary from "work/client-summary/client-summary"

import bg from "images/bg01.png"
import logo from "images/iuzeit.svg"

export default function Work(){
  return(
    <div>

      <ClientSummary
        logo={logo}
        action="/work/detail/iuseit"
        media={bg}
        tagline="is shapping the future of the online purchase journey"
      />
    </div>
  )
}
