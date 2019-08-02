import React from "react"
import { withRouter } from 'react-router';
import ClientDetail from "work/detail/detail"

import clients from "clients/data"

const Detail = ({
  match
}) => {

  const client = clients[match.params.client]

  return(
    <ClientDetail
      title={client.title}
      subtitle={client.subtitle}
      industry={client.industry}
      background={client.background}
      logo={client.logo.white}
      images={client.images}
      ask={client.ask}
      services={client.services}
      tools={client.tools}
    />
  )
}

export default withRouter(Detail)
