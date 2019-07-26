import React from "react"
import "./media-carousel.scss"
/* Third-Party Packages */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaItem({ media }){
  return(
    <div className="media-item">
      <img src={media} alt={media} className="media-image" />
    </div>
  )
}

export default function MediaCarousel({ images = [], maxSlides = 5, center }){
  const settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: maxSlides,
      slidesToScroll: 1,
      slidesPerRow: 1
  }

  if(center) {
    settings.centerMode = true
    settings.variableWidth = true
    settings.adaptiveHeight = true
  }

  return(
    <div className="media-carousel">
      <Slider {...settings} >
        {images.map((media, i) => (
          <MediaItem media={media} key={i} />
        ))}
      </Slider>
    </div>
  )
}
