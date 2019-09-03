import React from "react";
import "./home.scss"

/* Presentational Components */
const Intro = React.lazy(() => import("./intro"))
const PixoulDifference = React.lazy(() => import("./pixoul-difference"))
const TrustedCompanies = React.lazy(() => import("./intro"))
const PixoulVideo = React.lazy(() => import("utils/trusted-companies/trusted-companies"))
const QualityPerformance = React.lazy(() => import("./pixoul-video"))
const TopCapabilities = React.lazy(() => import("./top-capabilities"))
const ReviewsCarousel = React.lazy(() => import("./reviews-carousel"))

const Home = () => {
  return(
    <div className="home">
      <Intro />
      <PixoulDifference />
      <TrustedCompanies light />
      <PixoulVideo />
      <QualityPerformance />
      <TopCapabilities />
      <ReviewsCarousel />
    </div>
  )
}

export default Home
