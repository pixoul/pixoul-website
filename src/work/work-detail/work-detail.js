import React from "react"
import "./work-detail.scss"
import { Button } from "shards-react"

import iuzeitLogo from "./images/iuzeit-logo.svg"


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
        <img src={logo} className="detail-logo" />
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


export default function WorkDetail(){
  return(
    <div className="work-detail">
      <DetailHeader industry="E-Commerce Site" logo={iuzeitLogo} />
      <DetailContent>
        <DetailSide width={800}>
          <DetailText
            size={35}
            bold
            text="With iuzeit, finding the product that meets a user’s exact lifestyle need is only a few clicks away.  We refined the challenges of a traditional e-commerce journey to create a markeplace that helps prioritize what products matter most—all in one sleek, modern interface."
          />
          <DetailText
            size={25}
            italic
            text="Shaping the future of the online purchase journey."
            gutterTop={115}
            gutterBottom={118}
           />
        </DetailSide>

        <DetailSide width={250}>
            <DetailList
             title="The Ask"
             items={['Build a seamless design system that prioritizes ratings and reviews in one place.']}
            />
           <DetailList
            title="Services"
            items={['UX Research & Analysis', 'Prototyping', 'High-Fidelity UI Design', 'User Testing']}
           />
           <DetailList
            title="Tools"
            items={['Adobe XD', 'Sketch', 'InVision', 'Zeplin']}
           />
        </DetailSide>
      </DetailContent>



    </div>
  )
}
