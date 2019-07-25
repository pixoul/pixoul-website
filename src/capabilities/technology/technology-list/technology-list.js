import React from "react"
import "./technology-list.scss"
/* Third-Party Packages */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import adobe from "./images/adobe.svg"
import android from "./images/android.svg"
import angular from "./images/angular.svg"
import apple from "./images/apple.svg"
import atom from "./images/atom.svg"
import magento from "./images/magento.svg"
import shopify from "./images/shopify.svg"
import vue from "./images/vue.svg"

function TechnologyItem({ media }){
  return(
    <div className="technology-item">
      <img src={media} className="technology-media" />
    </div>
  )
}

export default function TechnologyList(){
  const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
  }

  return(
    <div className="technology-list">
      <Slider {...settings} >
        <TechnologyItem media={adobe} />
        <TechnologyItem media={android} />
        <TechnologyItem media={angular} />
        <TechnologyItem media={apple} />
        <TechnologyItem media={atom} />
        <TechnologyItem media={magento} />
        <TechnologyItem media={shopify} />
        <TechnologyItem media={vue} />
      </Slider>
    </div>
  )
}
