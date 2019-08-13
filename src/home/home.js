import React, { useRef } from "react";
import "./home.scss"

/* Presentational Components */
import Intro from "./intro"
import PixoulDifference from "./pixoul-difference"
import TrustedCompanies from "./trusted-companies"
import PixoulVideo from "./pixoul-video"
import QualityPerformance from "./quality-performance"
import TopCapabilities from "./top-capabilities"
import Reviews from "./reviews"

const Home = () => {
  return(
    <div className="home">
      <Intro />
      <PixoulDifference />
      <TrustedCompanies />
      <PixoulVideo />
      <QualityPerformance />
      <TopCapabilities />
      <Reviews />
    </div>
  )
}

export default Home
