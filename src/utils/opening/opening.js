import React from "react"
import "./opening.scss"

export default function Opening(props){

  const styles = {
    width: props.width ? props.width : 800
  }


  return(
    <div className="opening" style={styles}>
      <h3 className="opening-title">{props.title}</h3>
      <p className="opening-subtitle">{props.subtitle}</p>
    </div>
  )
}
