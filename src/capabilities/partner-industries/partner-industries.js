import React from "react"
import "./partner-industries.scss"
/* Utility Components */
import Capability from "utils/capability/capability"
/* Images */
import example1 from "./images/example-1.jpg"
import example2 from "./images/example-2.jpg"
import example3 from "./images/example-3.jpg"
import example4 from "./images/example-4.jpg"
import example5 from "./images/example-5.jpg"
import example6 from "./images/example-6.jpg"
import example7 from "./images/example-7.jpg"

const partnerIndustries = {
  direction: 'ltr',
  background: 'white',
  equal: true,
  title: 'We’re contributing to every industry.',
  subtitle: 'From venture-backed startups to the Fortune 500, we build solutions for our partners across a variety of industries.  Here’s just a few.',
  details: {
    'Business': 'B2B sales, internal tools, enterprise platforms, etc.',
    'FinTech': 'Cryptocurrency, governance platforms, etc.',
    'Government' : 'Local municipalities, economic boards, etc.',
    'Healthcare' : 'Employee training, carrier messaging platforms, etc.'
  },
  media: [
    { image: example1, width: 300 },
    { image: example2, width: 400 },
    { image: example3, width: 300 },
    { image: example4, width: 400 },
    { image: example5, width: 300 },
    { image: example6, width: 200, height: 350 },
    { image: example7, width: 200, height: 350 }
  ]
}


export default function PartnerIndustries(){
  return(
    <div className="partner-industries">
      <Capability {...partnerIndustries} />
    </div>
  )
}
