import React from "react"
/* Utils */
import { Carousel, Slide } from "utils/carousel"
import Review from "utils/review-card/review-card"

/* Review Data */
import reviews from "./reviews"

const ReviewsCarousel = () => {

  return(
    <div className="reviews gutters">
      <h3 className="reviews-title">What Our Clients Say</h3>

      <Carousel maxSlides={1}>
        {reviews.map((review, i) => (
          <Slide key={i}>
            <Review
              review={review.review}
              avatar={review.avatar}
              reviewer={review.reviewer}
              designation={review.designation}
            />
          </Slide>
        ))}
      </Carousel>
    </div>
  )
}

export default ReviewsCarousel
