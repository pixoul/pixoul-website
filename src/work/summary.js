import React from "react"
import { withRouter } from 'react-router';
import ClientSummary from "work/summary/summary"

import fusemap from "clients/fusemap/data"
import georgiaPacific from "clients/georgia-pacific/data"
import hcp from "clients/hcp/data"
import ikarus from "clients/ikarus/data"
import iuzeit from "clients/iuzeit/data"
import sofs from "clients/sofs/data"


const clients = {
  'fusemap': fusemap,
  'georgia-pacific': georgiaPacific,
  'hcp': hcp,
  'ikarus': ikarus,
  'iuzeit': iuzeit,
  'sofs': sofs
}


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
