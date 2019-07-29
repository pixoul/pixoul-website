import React from "react"
import "./review-card.scss"
import stars from "./images/stars.svg"

export default function ReviewCard({
  review,
  avatar,
  reviewer,
  designation
}){
  return(
    <div className="review-card">
      <div className="review-stars">
        <img src={stars} alt={stars} draggable="false" />
      </div>
      <div className="review-content">
        <p className="review-text">{review}</p>
        <img src={avatar} alt={avatar} draggable="false" className="reviewer-avatar"/>
        <h4 className="reviewer-name">{reviewer}</h4>
        <h6 className="reviewer-designation">{designation}</h6>
      </div>
    </div>
  )
}
