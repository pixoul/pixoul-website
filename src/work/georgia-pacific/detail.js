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
      <DetailHeader industry="Kiosk Interface" logo={logo} />
      <DetailContent>
        <DetailSide width={800}>
          <DetailText
            size={35}
            bold
            text="In partnership with Army of Bees, we designed a new check-in/check-out system that allowed Georgia-Pacific to quickly give their logisitics team an efficiency boost.  We built the product tailor-fit for outdoor professionals, and even designed it to minimzie sun glare."
          />
          <DetailText
            size={25}
            italic
            text="Transforming how logistics gets done."
            gutterTop={115}
            gutterBottom={118}
           />
        </DetailSide>

        <DetailSide width={250}>
            <DetailList
             title="The Ask"
             items={['Build a tablet design for easy check-in/check-out  and logistics coordination.']}
            />
           <DetailList
            title="Services"
            items={['Design Partnership', 'UX Research & Analytics', 'Low-Fi Wireframing', 'User Interface Design']}
           />
           <DetailList
            title="Tools"
            items={['Balsamiq', 'Figma', 'Sketch', 'InVision']}
           />
        </DetailSide>
      </DetailContent>

      <MediaCarousel images={images} maxSlides={1} center />
    </ClientDetail>
  )
}
