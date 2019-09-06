import React from "react"

import {Carousel} from "./carousel"

const MediaSlide = ({ media, action, caption }) => {

  const item = (
    <div className="media-item">
      <img src={media} alt={media} draggable="false" className="media-image" />
      { caption && (
        <span className="media-caption">{ caption }</span>
      )}
    </div>
  )

  return action ? (<button onClick={action} className="media-action">{item}</button>) : item
}


const MediaCarousel = ({ images = [], ...rest }) => {

  return(
    <Carousel {...rest}>
      {images.map((item, i) => (
        <MediaSlide key={i} {...item} />
      ))}
    </Carousel>
  )
}

export {
  MediaCarousel,
  MediaSlide
}
