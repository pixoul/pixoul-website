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

const images = [screen1, screen2, screen3, screen4, screen5, screen6]

export default function Detail(){
  return(
    <ClientDetail>
      <DetailHeader industry="Dashboard Matrix" logo={logo} />
      <DetailContent>
        <DetailSide width={800}>
          <DetailText
            size={35}
            bold
            text="Designing for a multi-billion user industry, we evolved the Healthcare Compliance Pros online suite into a feature-rich tool that helps maintain strict legal compliance, engages users, and fosters long-term retention."
          />
          <DetailText
            size={25}
            italic
            text="Setting the standard in healthcare—literally."
            gutterTop={115}
            gutterBottom={118}
           />
        </DetailSide>

        <DetailSide width={250}>
            <DetailList
             title="The Ask"
             items={['Overhaul the design and functionality of a leading healthcare compliance tool.']}
            />
           <DetailList
            title="Services"
            items={['UX Research & Analysis', 'High-Fidelity UI Design', 'Demo & Prototyping', 'User Testing']}
           />
           <DetailList
            title="Tools"
            items={['Trello', 'Adobe CC', 'Sketch', 'InVision']}
           />
        </DetailSide>
      </DetailContent>

      <MediaCarousel images={images} maxSlides={1} center />
    </ClientDetail>
  )
}
