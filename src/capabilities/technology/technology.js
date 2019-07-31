import React from "react"
import "./technology.scss"
/* Utility Components */
import { Hero, HeroContent, HeroTitle, HeroTagline} from "utils/hero/hero"
import MediaCarousel from "utils/media-carousel/media-carousel"
import Opening from "utils/opening/opening"
import Capability from "utils/capability/capability"
/* Images */
import bg from "./images/hero-background.jpg"
import data from "./data"
/* Carousel Images */
import adobe from "./images/adobe.svg"
import android from "./images/android.svg"
import angular from "./images/angular.svg"
import apple from "./images/apple.svg"
import atom from "./images/atom.svg"
import magento from "./images/magento.svg"
import shopify from "./images/shopify.svg"
import vue from "./images/vue.svg"
import react from "./images/react.svg"
import node from "./images/node.svg"

const images = [
  { media: adobe, action: () => window.open('https://www.adobe.com/', '_blank'), caption: 'Adobe' },
  { media: android, action: () => window.open('https://developer.android.com/', '_blank'), caption: 'Android' },
  { media: angular, action: () => window.open('https://angular.io/', '_blank'), caption: 'Angular' },
  { media: atom, action: () => window.open('https://atom.io/', '_blank'), caption: 'Atom' },
  { media: magento, action: () => window.open('https://magento.com/', '_blank'), caption: 'Magnento' },
  { media: shopify, action: () => window.open('https://www.shopify.com/', '_blank'), caption: 'Shopify' },
  { media: vue, action: () => window.open('https://vuejs.org/', '_blank'), caption: 'Vue.js' },
  { media: react, action: () => window.open('https://reactjs.org/', '_blank'), caption: 'React.js' },
  { media: node, action: () => window.open('https://nodejs.org/en/', '_blank'), caption: 'Node.js' }
]

export default function Technology(){
  return(
    <div>
      <Hero bg={bg} theme="dark" align="left" height={520}>
        <HeroContent>
          <HeroTagline text="Advanced technological support." color="#2ec986" size={22}/>
          <HeroTitle text="We deliver solutions on time and on budget through agile development." width={689} size={45} />
        </HeroContent>
      </Hero>

      {data.map((item, i) => (
        <Capability {...item} />
      ))}

      <div className="section white">
        <Opening
          title="Technologies we leverage."
          subtitle="We provide the most up-to-date, comprehensive, and secure implementations."
        />

        <MediaCarousel images={images} maxSlides={5} />
      </div>

    </div>
  )
}
