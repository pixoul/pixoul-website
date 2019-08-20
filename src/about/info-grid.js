import React from "react"

/* Images */
import augmented from "./images/augmented.png"
import support from "./images/support.png"

const InfoGrid = () => (
  <div className="info-grid">
    <div className="info-item ltr">
      <div className="info-content">
        <span className="info-title gutters">Augmented IT Talent.</span>
        <span className="info-description gutters">Utilize our full-time or hourly based freelancers to harness technical debt, combat roadmap scope creep, or fill knowledge gaps within your organization.</span>
      </div>
      <div className="info-media">
        <img src={augmented} alt={augmented} className="info-media-image" />
      </div>
    </div>

    <div className="info-item rtl">
      <div className="info-content">
        <span className="info-title gutters">Full Team Support.</span>
        <span className="info-description gutters">Our network can help you source a full team of designers, developers, and project managers—ensuring your next digital project is a smooth success.  </span>
      </div>
      <div className="info-media">
        <img src={support} alt={support} className="info-media-image" />
      </div>
    </div>
  </div>
)

export default InfoGrid
