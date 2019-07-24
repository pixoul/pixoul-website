import React from "react"
import "./our-value.scss"

import Opening from "utils/opening/opening"
import { ProductCollection } from "utils/product/product"
import startup from "images/startup.svg"
import worldwide from "images/worldwide.svg"
import cloud from "images/cloud.svg"
import laptop from "images/laptop.svg"
import pencil from "images/pencil.svg"

const products = [
  { media: startup, caption: "Innovation" },
  { media: worldwide, caption: "Collaboration" },
  { media: cloud, caption: "Simple Solutions" },
  { media: laptop, caption: "Data & Insights" },
  { media: pencil, caption: "Good Design" }
]

export default function OurValue(){
  return(
    <div className="our-value">
      <Opening
        width={750}
        title="What we value."
        subtitle="Our design-centric approach means our products focus on real data and business goals, bringing value and creativity into every solution."
      />

      <ProductCollection products={products} />
    </div>
  )
}
