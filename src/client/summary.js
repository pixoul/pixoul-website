import React from "react"
import { withRouter } from 'react-router';
import ClientSummary from "client/summary/summary"

import fusemap from "work/fusemap/data"
import georgiaPacific from "work/georgia-pacific/data"
import hcp from "work/hcp/data"
import ikarus from "work/ikarus/data"
import iuzeit from "work/iuzeit/data"
import sofs from "work/sofs/data"


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
