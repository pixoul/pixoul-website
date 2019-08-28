import React from "react"
/* Utils */
import Typography from "utils/typography/typography"
/* Images */
import augmented from "./images/augmented.png"
import support from "./images/support.png"

const InfoGrid = () => (
  <div className="info-grid">
    <div className="info-item ltr">
      <div className="info-body">
        <div className="info-content">
          <Typography variant="h1" color="primary" align="left" weight="bold">Augmented IT <br />Talent.</Typography>
          <Typography variant="p" color="secondary" align="left">Utilize our full-time or hourly based freelancers to harness technical debt, combat roadmap scope creep, or fill knowledge gaps within your organization.</Typography>
        </div>
      </div>
      <div className="info-media">
        <img src={augmented} alt={augmented} className="info-image" />
      </div>
    </div>

    <div className="info-item rtl">
      <div className="info-body">
        <div className="info-content">
          <Typography variant="h1" color="primary" align="left" weight="bold">Full Team <br />Support.</Typography>
          <Typography variant="p" color="secondary" align="left">Our network can help you source a full team of designers, developers, and project managers—ensuring your next digital project is a smooth success.</Typography>
        </div>
      </div>
      <div className="info-media">
        <img src={support} alt={support} className="info-image" />
      </div>
    </div>
  </div>
)

export default InfoGrid
