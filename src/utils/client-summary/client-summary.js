import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import "./client-summary.scss"

function ClientSummary(props){
  return(
    <div className="client-summary">
      <div className="client-info">
        <img src={props.logo} className="client-logo" />
        <p className="client-tagline">{props.tagline}</p>
        <Link to={props.action} className="client-action">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></Link>
      </div>
      <div className="client-media">
        <img src={props.media} className="summary-media" />
      </div>
    </div>
  )
}

export default ClientSummary
