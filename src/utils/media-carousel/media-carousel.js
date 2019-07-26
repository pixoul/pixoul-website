import React from "react"
import "./media-carousel.scss"
/* Third-Party Packages */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaItem({ media }){
  return(
    <div className="media-item">
      <img src={media} className="media-image" />
    </div>
  )
}

export default function MediaCarousel({ images = [], slidesToShow = 5 }){
  const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1
  }

  return(
    <div className="media-carousel">
      <Slider {...settings} >
        {images.map((media, i) => (
          <MediaItem media={media} />
        ))}
      </Slider>
    </div>
  )
}
