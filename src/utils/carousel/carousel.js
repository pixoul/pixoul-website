import React from "react"
import "./carousel.scss"
/* Third-Party Packages */
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "./images/next-arrow.svg"
import prev from "./images/prev-arrow.svg"

const NextArrow = ({ className, style, onClick }) => (
  <img src={next} alt={next} onClick={onClick} style={style} className={className} />
)

const PrevArrow = ({ className, style, onClick }) => (
  <img src={prev} alt={prev} onClick={onClick} style={style} className={className} />
)

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
      speed: 1000,
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
