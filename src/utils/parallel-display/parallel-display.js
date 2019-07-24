import React from "react"
import "./parallel-display.scss"

function ParallelImage(props){

  const styles = {
    height: props.height ? props.height : 560,
    width: props.width ? props.width : 600,
  }

  return(
    <div className="parallel-media">
      <img src={props.media} className="parallel-image" style={styles} />
    </div>
  )
}

function ParallelText(props){

  const styles = {
    fontSize: props.size ? props.size : 45,
    width: props.width ? props.width : 300,
    color: props.color ? props.color : '#374050'
  }

  return(
    <div className="parallel-text" style={styles}>{props.text}</div>
  )
}

function ParallelList(props){
  return(
    <div className="parallel-list">
      {props.children}
    </div>
  )
}

function ParallelItem(props){
  return(
    <div className="parallel-item">
      <span className="parallel-item-title">{props.title}</span>
      <span className="parallel-item-tagline">{props.tagline}</span>
    </div>
  )
}

function ParallelContent(props){
  return(
    <div className="parallel-content">
      {props.children}
    </div>
  )
}

function ParallelDisplay(props){
  return(
    <div className="parallel-display">
      {props.children}
    </div>
  )
}


export {
  ParallelDisplay,
  ParallelContent,
  ParallelImage,
  ParallelText,
  ParallelList,
  ParallelItem
}
