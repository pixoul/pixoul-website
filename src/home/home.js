import React from "react";
import "./home.scss"

/* Presentational Components */
const Intro = React.lazy(() => import("./intro"))
const PixoulDifference = React.lazy(() => import("./pixoul-difference"))
const TrustedCompanies = React.lazy(() => import("utils/trusted-companies/trusted-companies"))
const PixoulVideo = React.lazy(() => import("./pixoul-video"))
const QualityPerformance = React.lazy(() => import("./quality-performance"))
const TopCapabilities = React.lazy(() => import("./top-capabilities"))
const ReviewsCarousel = React.lazy(() => import("./reviews-carousel"))

const Home = () => {
  return(
    <div className="home">
      <Intro />
      <PixoulDifference />
      <TrustedCompanies light animateOnce />
      <PixoulVideo />
      <QualityPerformance />
      <TopCapabilities />
      <ReviewsCarousel />
    </div>
  )
}

export default Home
