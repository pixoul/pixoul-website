import React from "react"
import "./technology.scss"

/* Utility Components */
import { Hero, HeroContent, HeroTitle, HeroTagline} from "utils/hero/hero"
import { ParallelDisplay, ParallelContent, ParallelList, ParallelItem, ParallelImage, ParallelText } from "utils/parallel-display/parallel-display"

import MediaCarousel from "utils/media-carousel/media-carousel"
import Opening from "utils/opening/opening"

/* Page Images */
import bg from "./images/hero-background.jpg"
import frontendDev from "./images/frontend-dev.jpg"
import mobileApps from "./images/mobile-apps.jpg"
import ecommerceSystems from "./images/ecommerce-systems.jpg"
import cloudImplementations from "./images/cloud-implementations.jpg"
/* Carousel Images */
import adobe from "./images/adobe.svg"
import android from "./images/android.svg"
import angular from "./images/angular.svg"
import apple from "./images/apple.svg"
import atom from "./images/atom.svg"
import magento from "./images/magento.svg"
import shopify from "./images/shopify.svg"
import vue from "./images/vue.svg"

const images = [adobe, android, angular, apple, atom, magento, shopify, vue]


export default function Technology(){
  return(
    <div>
      <Hero bg={bg} theme="dark" align="left" height={520}>
        <HeroContent>
          <HeroTagline text="Advanced technological support." color="#2ec986" size={22}/>
          <HeroTitle text="We deliver solutions on time and on budget through agile development." width={689} size={45} />
        </HeroContent>
      </Hero>

      <div className="section white bottom-gutter">
        <ParallelDisplay>
          <ParallelContent leftGutter={150}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="01. Front End Development"
            />
            <ParallelText
              width={530}
              size={20}
              text="We use responsive design to build websites, desktop applications, progressive web apps, and much more."
            />

            <ParallelList>
              <ParallelItem
                title="Powerful Tools"
                tagline="Leverage the most up-to-date and secure frameworks."
              />

              <ParallelItem
                title="Seamless Integration"
                tagline="Build with existing architecture in mind."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={frontendDev} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey bottom-gutter">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={mobileApps} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="02. Mobile & IoT Applications"
            />
            <ParallelText
              width={530}
              size={20}
              text="Beyond responsive web and application development, our human-centered design processes help us to build and support iOS and Android applications."
            />

            <ParallelList>
              <ParallelItem
                title="Mobile"
                tagline="Scale applications for the most popular operating systems."
              />

              <ParallelItem
                title="Beyond Mobile"
                tagline="Expand with wearables, voice-user interfaces, and more."
              />
            </ParallelList>
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section white bottom-gutter">
        <ParallelDisplay>
          <ParallelContent leftGutter={150}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="03. Scalable Ecommerce Systems"
            />
            <ParallelText
              width={530}
              size={20}
              text="Working alongside Google’s ecommerce standards, we implement solutions from a range of secure providers."
            />

            <ParallelList>
              <ParallelItem
                title="Payment Solutions"
                tagline="Integrate with top-tier payment gateways."
              />

              <ParallelItem
                title="Thinking Bigger"
                tagline="Design for categories, products, and conversion funnels."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={ecommerceSystems} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey bottom-gutter">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={cloudImplementations} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="04. API, CMS & Cloud Implementations"
            />
            <ParallelText
              width={530}
              size={20}
              text="Our custom builds allow for seamless API integration, cloud opportunities, and assimilation with robust and secure content management systems."
            />

            <ParallelList>
              <ParallelItem
                title="Familiar Approaches"
                tagline="Work with popularsystems, like Wordpress, Drupal, and Joomla."
              />

              <ParallelItem
                title="Future-Proof"
                tagline="Architect for today’s necessities and tomorrow’s advances."
              />
            </ParallelList>
          </ParallelContent>
        </ParallelDisplay>
      </div>

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
