import React from "react"
import "./reviews.scss"
/* Third-Party Packages */
import { Container, Row, Col } from "shards-react"
/* Utility Components */
import Opening from "utils/opening/opening"
import ReviewCard from "utils/review-card/review-card"
/* Images */
import reviewer1 from "./images/reviewer-1.jpg"
import reviewer2 from "./images/reviewer-2.jpg"
import reviewer3 from "./images/reviewer-3.jpg"

export default function Reviews(){
  return(
    <div className="reviews">
      <Opening
        title="Hear what everyone is saying."
        subtitle="Don’t just take our word for it."
      />

      <Container>
        <Row>
          <Col sm="12" md="4">
            <ReviewCard
              review="Pixoul is absolutely amazing!  They guided us through our website redesign and held our hand every step of the way. I couldn't have asked for a better team."
              avatar={reviewer1}
              reviewer="Kendall Sampson"
              designation="Product Manager"
              quantity={5}
            />
          </Col>

          <Col sm="12" md="4">
            <ReviewCard
              review="Used Pixoul after two failed attempts at other dev agencies.  Since then, we've seen engagement go through the roof and customers are loving our new platform."
              avatar={reviewer2}
              reviewer="Jake Richards"
              designation="CTO"
              quantity={5}
            />
          </Col>

          <Col sm="12" md="4">
            <ReviewCard
              review="Pixoul spent the day at our offices explaining design thinking fundamentals. We constantly refer back to those sessions for every decision we make!!"
              avatar={reviewer3}
              reviewer="Quincy Roberts"
              designation="CTO"
              quantity={5}
            />
          </Col>
        </Row>
      </Container>

    </div>
  )
}
