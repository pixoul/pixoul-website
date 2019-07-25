import React from "react"
import "./partner-network.scss"

import {
  ParallelDisplay,
  ParallelContent,
  ParallelList,
  ParallelItem,
  ParallelImage,
  ParallelText
} from "utils/parallel-display/parallel-display"

import map from "images/bitmap.jpg"

export default function PartnerNetwork(){
  return(
    <div className="partner-network">

      <ParallelDisplay>
        <ParallelContent>
          <ParallelImage media={map} width={606} height={563} />
        </ParallelContent>


        <ParallelContent rightGutter={80}>
          <ParallelText
            width={560}
            size={45}
            color="#000000"
            text="Our partner network is always expanding."
          />
          <ParallelText
            width={530}
            size={20}
            text="Headquartered in Dallas, TX, we’re proud to have made an impact on communities around the world."
          />

          <ParallelList>
            <ParallelItem
              title="Team Members"
              tagline="Across North America."
            />

            <ParallelItem
              title="Clients"
              tagline="Around the globe."
            />
          </ParallelList>
        </ParallelContent>
      </ParallelDisplay>

    </div>
  )
}
