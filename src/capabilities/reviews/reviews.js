import React from "react"
import "./reviews.scss"
/* Utility Components */
import Opening from "utils/opening/opening"
import { Carousel, Slide } from "utils/carousel"
import ReviewCard from "utils/review-card/review-card"
import data from "./data"

export default function Reviews(){
  return(
    <div className="reviews">
      <Opening
        title="Hear what everyone is saying."
        subtitle="Don’t just take our word for it."
      />

      <Carousel maxSlides={1} offset={76} gutter={20} autoplay>
          {data.map((item, i) => (
            <Slide key={i}>
              <ReviewCard
                review={item.review}
                avatar={item.avatar}
                reviewer={item.reviewer}
                designation={item.designation}
              />
            </Slide>
          ))}
      </Carousel>

    </div>
  )
}
