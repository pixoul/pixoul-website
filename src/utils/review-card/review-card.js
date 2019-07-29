import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import "./review-card.scss"

export default function ReviewCard({
  quantity = 0,
  review,
  avatar,
  reviewer,
  designation
}){
  return(
    <div className="review-card">
      <div className="review-stars">
        {[...Array(quantity)].map((e, i) => <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />)}
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
