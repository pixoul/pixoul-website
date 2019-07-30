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
      <DetailHeader industry="Corporate Site" logo={logo} />
      <DetailContent>
        <DetailSide width={800}>
          <DetailText
            size={35}
            bold
            text="Ikarūs is changing what it means to buy, sell, and trade businesses.  Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public."
          />
          <DetailText
            size={25}
            italic
            text="Redefining the business marketplace."
            gutterTop={115}
            gutterBottom={118}
           />
        </DetailSide>

        <DetailSide width={250}>
            <DetailList
             title="The Ask"
             items={['Create and brand a business marketplace, including a full-service transaction center.']}
            />
           <DetailList
            title="Services"
            items={['UX Research & Analysis', 'High-Fidelity UI Design', 'User Testing', 'Front-End Development']}
           />
           <DetailList
            title="Tools"
            items={['Balsamiq', 'Sketch', 'InVision', 'Atom']}
           />
        </DetailSide>
      </DetailContent>

      <MediaCarousel images={images} maxSlides={1} center />
    </ClientDetail>
  )
}
