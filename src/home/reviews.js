import React from "react"
/* Utils */
import { Carousel, Slide } from "utils/carousel"
import Review from "utils/review-card/review-card"

/* Images */
import reviewer1 from "./images/reviewers/reviewer-1.png"

const Reviews = () => {

  return(
    <div className="reviews gutters">
      <h3 className="reviews-title">WHAT OUR CLIENTS SAY</h3>

      <Carousel maxSlides={1}  >
        <Slide>
          <Review
            review="The process is very low pressure, and highly customizable to our budget and goals.  Highly recommend!"
            avatar={reviewer1}
            reviewer="JOSH EVANS"
            designation="Chief Technology Officer"
          />
        </Slide>
        <Slide>
          <Review
            review="The process is very low pressure, and highly customizable to our budget and goals.  Highly recommend!"
            avatar={reviewer1}
            reviewer="JOSH EVANS"
            designation="Chief Technology Officer"
          />
        </Slide>
      </Carousel>
    </div>
  )
}

export default Reviews
