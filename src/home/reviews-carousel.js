import React from "react"
/* Utils */
import { Carousel, Slide } from "utils/carousel"
import Review from "utils/review-card/review-card"
import Typography from "utils/typography/typography"

import quote from "./images/quote.svg"

/* Review Data */
import reviews from "./reviews"

const ReviewsCarousel = () => {

  return(
    <div className="reviews gutters">

      <Typography variant="h6" color="primary" align="center" weight="bold" transform="uppercase">What Our Clients Say</Typography>
      <div className="review-quote">
        <img src={quote} alt={quote} draggable="false" />
      </div>

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
