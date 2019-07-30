import React from "react"
import "./media-carousel.scss"
/* Third-Party Packages */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaItem({ media, action, caption }){

  const item = (
    <div className="media-item">
      <img src={media} alt={media} draggable="false" className="media-image" />
      { caption && (
        <span className="media-caption">{ caption }</span>
      )}
    </div>
  )

  return action ? (<a onClick={action} className="media-action">{item}</a>) : item
}

export default function MediaCarousel({ images = [], maxSlides = 5, center }){
  const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: maxSlides,
      slidesToScroll: maxSlides,
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
        {images.map((item, i) => (
          <MediaItem key={i} {...item} />
        ))}
      </Slider>
    </div>
  )
}
