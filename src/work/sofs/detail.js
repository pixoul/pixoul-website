import React from "react"
import { ClientDetail, DetailHeader, DetailContent, DetailSide, DetailText, DetailList } from "utils/client-detail/client-detail"
import MediaCarousel from "utils/media-carousel/media-carousel"

/* Images */
import logo from "./images/logo-white.svg"
import screen1 from "./images/screen-1.png"
import screen2 from "./images/screen-2.png"
import screen3 from "./images/screen-3.png"
import screen4 from "./images/screen-4.png"
import screen5 from "./images/screen-5.png"
import screen6 from "./images/screen-6.png"

const images = [
  { media: screen1 },
  { media: screen2 },
  { media: screen3 },
  { media: screen4 },
  { media: screen5 },
  { media: screen6 },
]

export default function Detail(){
  return(
    <ClientDetail>
      <DetailHeader industry="Analytics Dashboard" logo={logo} />
      <DetailContent>
        <DetailSide width={800}>
          <DetailText
            size={35}
            bold
            text="Working with Stallion meant taking data visualization to the next level.  By doing a deep-dive into the world of oilfield services, we built a robust interface that simplified complex data streams and allowed snapshot statistics of vital KPIs."
          />
          <DetailText
            size={25}
            italic
            text="Taking field analytics to a whole new level."
            gutterTop={115}
            gutterBottom={118}
           />
        </DetailSide>

        <DetailSide width={250}>
            <DetailList
             title="The Ask"
             items={['Build a display to an analytics engine that fits the needs of businesses and technicians.']}
            />
           <DetailList
            title="Services"
            items={['Analytics Review', 'Low-Fi Sketching', 'High-Fi Prototyping', 'Development QA Support']}
           />
           <DetailList
            title="Tools"
            items={['Pen + Paper', 'Sketch', 'InVision', 'Trello']}
           />
        </DetailSide>
      </DetailContent>

      <MediaCarousel images={images} maxSlides={1} center />
    </ClientDetail>
  )
}
