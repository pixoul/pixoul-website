import React from "react"
import {Card, CardImg, CardBody} from "shards-react"
import "./client-card.scss"

export default function ClientCard(props){
  return(
    <Card className="client-card">
      <CardImg top src={props.media} className="client-media" />
      <CardBody>
        <h4 className="client-title">{props.title}</h4>
      </CardBody>
    </Card>
  )
}
