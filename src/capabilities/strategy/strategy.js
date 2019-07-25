import React from "react"
import "./strategy.scss"
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroTitle, HeroAction, HeroTagline} from "utils/hero/hero"
import { ParallelDisplay, ParallelContent, ParallelList, ParallelItem, ParallelImage, ParallelText } from "utils/parallel-display/parallel-display"

import bg from "./images/hero-background.jpg"
import designWorkshops from "./images/design-workshops.jpg"
import analyticInsights from "./images/analytic-insights.jpg"
import digitalAudits from "./images/digital-audits.jpg"
import digitalPlanning from "./images/digital-planning.jpg"

export default function Strategy(){
  return(
    <div>
      <Hero bg={bg} theme="dark" align="left" height={520}>
        <HeroContent>
          <HeroTagline text="Our strategic solutions reduce risk." color="#2ec986" size={22}/>
          <HeroTitle text="We’ll work with you to find solutions to your most complex challenges." width={689} size={45} />
        </HeroContent>
      </Hero>

      <div className="section white">
        <ParallelDisplay>
          <ParallelContent leftGutter={150}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="01. Design Thinking Workshops"
            />
            <ParallelText
              width={530}
              size={20}
              text="As a design community, we believe human interaction is at the heart of everything we build."
            />

            <ParallelList>
              <ParallelItem
                title="Collaborative Design"
                tagline="Work with everyone—from analysts to C-Suite executives."
              />

              <ParallelItem
                title="KPI-Based Outcomes"
                tagline="Build a strategy that delivers maximum, scalable impact."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={designWorkshops} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={analyticInsights} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="02. Data Insights & Analytics"
            />
            <ParallelText
              width={530}
              size={20}
              text="Our research teams believe transformational strategy starts with powerful data and a focus on consumer insights."
            />

            <ParallelList>
              <ParallelItem
                title="Digging Deeper"
                tagline="Understand user sentiment and unlock market potential."
              />

              <ParallelItem
                title="Capitalize on ROI"
                tagline="Identify new revenue streams and find your digital voice."
              />
            </ParallelList>
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section white">
        <ParallelDisplay>
          <ParallelContent leftGutter={150}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="03. Comprehensive Digital Audits"
            />
            <ParallelText
              width={530}
              size={20}
              text="Backed with data, we help you uncover new ways of presenting your digital message."
            />

            <ParallelList>
              <ParallelItem
                title="Start with a Benchmark"
                tagline="Analyze industry trends and determine your unique value."
              />

              <ParallelItem
                title="Understand the Market"
                tagline="Find unfulfilled marketspace to craft the right presence."
              />
            </ParallelList>
          </ParallelContent>
          <ParallelContent rightGutter={0}>
            <ParallelImage media={digitalAudits} width={606} height={563} />
          </ParallelContent>
        </ParallelDisplay>
      </div>

      <div className="section grey">
        <ParallelDisplay>

          <ParallelContent>
            <ParallelImage media={digitalPlanning} width={606} height={563} />
          </ParallelContent>

          <ParallelContent rightGutter={80}>
            <ParallelText
              width={560}
              size={45}
              color="#000000"
              text="04. Digital Planning & Roadmapping"
            />
            <ParallelText
              width={530}
              size={20}
              text="We know each project is unique, and every digital landscape has its own challenges."
            />

            <ParallelList>
              <ParallelItem
                title="In-Depth Strategy"
                tagline="Provide a complete guide—timelines, budgets, and more. "
              />

              <ParallelItem
                title="The Road Ahead"
                tagline="Know what’s coming up next with our roadmapping services."
              />
            </ParallelList>
          </ParallelContent>
        </ParallelDisplay>
      </div>

    </div>
  )
}
