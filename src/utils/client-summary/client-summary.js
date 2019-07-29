import React from "react"
import { Link } from "react-router-dom"
import "./client-summary.scss"
import arrow from "./images/blue-arrow.svg"

function ClientSummary(props){
  return(
    <div className="client-summary">
      <div className="client-info">
        <img src={props.logo} alt={props.logo} draggable="false" className="client-logo" />
        <p className="client-tagline">{props.tagline}</p>
        <Link to={props.action} className="client-action">Learn More <img src={arrow} alt={arrow} draggable="false" /></Link>
      </div>
      <div className="client-media">
        <img src={props.media} alt={props.media} draggable="false" className="summary-media" />
      </div>
    </div>
  )
}

export default ClientSummary
