import React from "react"
import "./review-card.scss"

export default function ReviewCard({
  review,
  avatar,
  reviewer,
  designation
}){
  return(
    <div className="review-card">
      <div className="review-content">
        <p className="review-text">{review}</p>
        <img src={avatar} alt={avatar} draggable="false" className="reviewer-avatar"/>
        <h4 className="reviewer-name">{reviewer}</h4>
        <h6 className="reviewer-designation">{designation}</h6>
      </div>
    </div>
  )
}
