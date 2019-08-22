import React, { useState } from "react"
import "./carousel.scss"
/* Third-Party Packages */
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextBlue from "./images/next-blue.svg"
import prevBlue from "./images/prev-blue.svg"
import nextGrey from "./images/next-grey.svg"
import prevGrey from "./images/prev-grey.svg"

const NextArrow = ({ className, style, onClick }) => {
  const [hover, setHover] = useState(false)
  const icon = hover ? nextBlue : nextGrey
  return (
    <img
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={icon}
      alt={icon}
      onClick={onClick}
      style={style}
      className={className}
    />
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  const [hover, setHover] = useState(false)
  const icon = hover ? prevBlue : prevGrey
  return (
    <img
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={icon}
      alt={icon}
      onClick={onClick}
      style={style}
      className={className}
    />
  )
}

const Slide = ({ children }) => (
  <div className="slide-item">
    { children }
  </div>
)

const Carousel = ({ images = [], maxSlides = 5, center = false, children, autoplay = false, gutter, offset }) => {
  const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 5000,
      autoplay: autoplay,
      slidesToShow: maxSlides,
      slidesToScroll: maxSlides,
      slidesPerRow: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
  }

  if(center) {
    settings.centerMode = true
    settings.variableWidth = true
    settings.adaptiveHeight = true
  }

  const styles = {}

  if(gutter) {
    styles.paddingLeft = gutter
    styles.paddingRight = gutter
  }

  if(offset) {
    styles.paddingTop = offset
    styles.paddingBottom = offset
  }

  return(
    <div className="dynamic-carousel" >
      <SlickSlider style={styles} {...settings} >
        {children}
      </SlickSlider>
    </div>
  )
}


export { Carousel, Slide }
