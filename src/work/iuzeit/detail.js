import React from "react"
import { ClientDetail, DetailHeader, DetailContent, DetailSide, DetailText, DetailList } from "utils/client-detail/client-detail"
import {MediaCarousel} from "utils/carousel"

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
      <DetailHeader industry="E-Commerce Site" logo={logo} />
      <DetailContent>
        <DetailSide width={800}>
          <DetailText
            size={35}
            bold
            text="With iuzeit, finding the product that meets a user’s exact lifestyle need is only a few clicks away.  We refined the challenges of a traditional e-commerce journey to create a markeplace that helps prioritize what products matter most—all in one sleek, modern interface."
          />
          <DetailText
            size={25}
            italic
            text="Shaping the future of the online purchase journey."
            gutterTop={115}
            gutterBottom={118}
           />
        </DetailSide>

        <DetailSide width={250}>
            <DetailList
             title="The Ask"
             items={['Build a seamless design system that prioritizes ratings and reviews in one place.']}
            />
           <DetailList
            title="Services"
            items={['UX Research & Analysis', 'Prototyping', 'High-Fidelity UI Design', 'User Testing']}
           />
           <DetailList
            title="Tools"
            items={['Adobe XD', 'Sketch', 'InVision', 'Zeplin']}
           />
        </DetailSide>
      </DetailContent>

      <MediaCarousel images={images} maxSlides={1} center />
    </ClientDetail>
  )
}
