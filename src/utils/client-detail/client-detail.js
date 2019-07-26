import React from "react"
import "./client-detail.scss"
import { Button } from "shards-react"


function DetailText({ text, size, gutterTop, gutterBottom, italic, bold }){
  const styles = {}
  if(size) styles.fontSize = size
  if(gutterTop) styles.marginTop = gutterTop
  if(gutterBottom) styles.marginBottom = gutterBottom
  if(italic) styles.fontStyle = 'italic'
  if(bold) styles.fontWeight = 'bold'

  return(
    <div className="detail-text" style={styles}>{text}</div>
  )
}

function DetailHeader({ industry, logo }){
  return(
    <div className="detail-header">
      <div className="detail-left">
        <div className="detail-industry">{ industry }</div>
        <img src={logo} alt={logo} className="detail-logo" />
      </div>
      <div className="detail-right">
        <Button className="detail-action" theme="light" size="lg" outline>View Work</Button>
      </div>
    </div>
  )
}


function DetailContent({ children }){
  return(
    <div className="detail-content">
      { children }
    </div>
  )
}

function DetailSide({ children, width }){
  const styles = {}
  if(width) styles.width = width

  return(
    <div className="detail-size" style={styles}>
      { children }
    </div>
  )
}

function DetailList({ title, items = [] }){
  return(
    <div className="detail-list">
      <div className="list-title">{ title }</div>
      {items.map((item, i) => (
        <div className="list-item" key={i}>{item}</div>
      ))}

    </div>
  )
}

function ClientDetail({ children }){
  return(
    <div className="client-detail">
      {children}
    </div>
  )
}


export {
  ClientDetail,
  DetailHeader,
  DetailText,
  DetailList,
  DetailContent,
  DetailSide
}
