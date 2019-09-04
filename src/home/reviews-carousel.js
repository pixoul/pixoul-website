import React from "react"
/* Utils */
import { Carousel, Slide } from "utils/carousel"
import Review from "utils/review-card/review-card"
import Typography from "utils/typography/typography"
import { Animate } from "utils/animate/animate"
import quote from "./images/quote.svg"

/* Review Data */
import reviews from "./reviews"

const ReviewsCarousel = () => {

  return(
    <div className="reviews gutters">

      <Animate delay={100}>
        <Typography variant="subtitle2" align="center">What Our Clients Say</Typography>
      </Animate>

      <Animate delay={200}>
        <div className="review-quote">
          <img src={quote} alt={quote} draggable="false" />
        </div>
      </Animate>

      <Animate delay={500} partial>
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
      </Animate>

    </div>
  )
}

export default ReviewsCarousel
