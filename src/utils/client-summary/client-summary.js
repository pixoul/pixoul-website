import React from "react"
import { Link } from "react-router-dom"
import "./client-summary.scss"
import arrow from "./images/blue-arrow.svg"

function ClientSummary(props){
  return(
    <div className="client-summary">
      <div className="client-info">
        <img src={props.logo} alt={props.logo} className="client-logo" />
        <p className="client-tagline">{props.tagline}</p>
        <Link to={props.action} className="client-action">Learn More <img src={arrow} alt={arrow} /></Link>
      </div>
      <div className="client-media">
        <img src={props.media} alt={props.media} className="summary-media" />
      </div>
    </div>
  )
}

export default ClientSummary
