import React from "react"
import { withRouter } from 'react-router';
import ClientSummary from "work/summary/summary"

import clients from "clients/data"

const Detail = ({
  match
}) => {

  const data = clients[match.params.client]

  return(
    <ClientSummary
      logo={data.logo.color}
      tagline={data.tagline}
      route={data.route}
      media={data.background}
    />
  )
}

export default withRouter(Detail)
