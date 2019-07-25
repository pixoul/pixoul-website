import React from "react"
import "./partner-industries.scss"

import { ParallelDisplay, ParallelContent, ParallelList, ParallelItem, ParallelImage, ParallelText } from "utils/parallel-display/parallel-display"

import example1 from "./images/example-1.jpg"
import example2 from "./images/example-2.jpg"
import example3 from "./images/example-3.jpg"
import example4 from "./images/example-4.jpg"
import example5 from "./images/example-5.jpg"
import example6 from "./images/example-6.jpg"
import example7 from "./images/example-7.jpg"

export default function PartnerIndustries(){
  return(
    <div className="partner-industries">
      <ParallelDisplay>
        <ParallelContent multiple>
          <ParallelImage media={example1} width={300} />
          <ParallelImage media={example2} width={400} />
          <ParallelImage media={example3} width={300} />
          <ParallelImage media={example4} width={400} />
          <ParallelImage media={example5} width={300} />
          <ParallelImage media={example6} width={200} height={350} />
          <ParallelImage media={example7} width={200} height={350} />
        </ParallelContent>

        <ParallelContent>
          <ParallelText
            width={550}
            size={45}
            color="#000000"
            text="We’re contributing to every industry."
          />
          <ParallelText
            width={529}
            size={20}
            text="From venture-backed startups to the Fortune 500, we build solutions for our partners across a variety of industries.  Here’s just a few."
          />

          <ParallelList>
            <ParallelItem title="Business" tagline="B2B sales, internal tools, enterprise platforms, etc." />
            <ParallelItem title="FinTech" tagline="Cryptocurrency, governance platforms, etc." />
            <ParallelItem title="Government" tagline="Local municipalities, economic boards, etc." />
            <ParallelItem title="Healthcare" tagline="Employee training, carrier messaging platforms, etc." />
          </ParallelList>
        </ParallelContent>
      </ParallelDisplay>
    </div>
  )
}
