import React from "react"
import "./opening.scss"

export default function Opening(props){
  return(
    <div className="opening">
      <h3 className="opening-title">{props.title}</h3>
      <p className="opening-subtitle">{props.subtitle}</p>
    </div>
  )
}
