import React from "react"
import { ClientDetail, DetailHeader, DetailContent, DetailSide, DetailText, DetailList } from "utils/client-detail/client-detail"
import {MediaCarousel} from "utils/carousel"

/* Images */
import logo from "./images/logo-white.png"
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
      <DetailHeader industry="Enterprise System" logo={logo} />
      <DetailContent>
        <DetailSide width={800}>
          <DetailText
            size={35}
            bold
            text="Working with Fusemap was a chance to redefine how we interpret basic, everyday tasks.  Using their cloud-based tool, we captured and vizualized the complex operational tasks of automated and AI-powered building management."
          />
          <DetailText
            size={25}
            italic
            text="Thinking smarter about how we power the world."
            gutterTop={115}
            gutterBottom={118}
           />
        </DetailSide>

        <DetailSide width={250}>
            <DetailList
             title="The Ask"
             items={['Lead the over-arching design of an AI-powered energy management system.']}
            />
           <DetailList
            title="Services"
            items={['Project Management', 'UX Research & Analysis', 'High-Fidelity UI Design', 'Prototyping & Testing']}
           />
           <DetailList
            title="Tools"
            items={['Trello', 'Balsamiq', 'Sketch', 'InVision']}
           />
        </DetailSide>
      </DetailContent>

      <MediaCarousel images={images} maxSlides={1} center />
    </ClientDetail>
  )
}
