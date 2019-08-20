import React from "react"
import { Link } from "react-router-dom"
import Button from "utils/button/button"
import { Card, CardImg, CardBody } from "utils/card"
import "./latest.scss"

import Opening from "utils/opening/opening"

import iuzeitMedia from "./images/bg01.png"
import georgiaPacificMedia from "./images/bg02.png"
import ikarusMedia from "./images/bg03.png"

const ClientCard = ({ media, title, action}) => {
  return(
    <Card className="client-card" tag={Link} to={action}>
      <CardImg top src={media} className="client-media" />
      <CardBody>
        <h4 className="client-title">{title}</h4>
      </CardBody>
    </Card>
  )
}

const WorkLatest = () => {
  return(
    <div className="client-latest">
      <Opening
        title="See our latest work."
        subtitle="Explore some of our recent collaborations with major brands."
      />
      <div className="client-cards">
        <ClientCard media={iuzeitMedia} title="iuzeit" action="/work/detail/iuzeit" />
        <ClientCard media={georgiaPacificMedia} title="Georgia-Pacific" action="/work/detail/georgia-pacific" />
        <ClientCard media={ikarusMedia} title="Ikarūs" action="/work/detail/ikarus" />
      </div>

      <div className="latest-action">
        <Button outline tag={Link} to="/work">More Case Studies</Button>
      </div>
    </div>
  )
}


export default WorkLatest
