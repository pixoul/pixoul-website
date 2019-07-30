import React from "react"
import { Link } from "react-router-dom"
import {Card, CardImg, CardBody} from "shards-react"
import "./client-card.scss"

export default function ClientCard({ media, title, action}){
  return(
    <Card className="client-card" tag={Link} to={action}>
      <CardImg top src={media} className="client-media" />
      <CardBody>
        <h4 className="client-title">{title}</h4>
      </CardBody>
    </Card>
  )
}
