import React from "react"
/* Utils */
import Project from "utils/project/project"
import { Carousel, Slide } from "utils/carousel"
/* Images */
import ikarus from "./images/clients/ikarus.svg"
import iuzeit from "./images/clients/iuzeit.svg"
import stallion from "./images/clients/stallion.svg"
import georgiaPacific from "./images/clients/georgia-pacific.svg"
import fusemap from "./images/clients/fusemap.png"
import hcp from "./images/clients/hcp.png"

const ClientWork = () => {

  return (
    <div className="client-work gutters">
        <Carousel maxSlides={1}>
          <Slide>
            <Project
              media={ikarus}
              name="Ikarūs"
              tagline="Redefining the Business Marketplace"
              description="Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public."
              services={['UX/UI Design', 'Development', 'QA Testing']}
              tools={['Balsamiq', 'Sketch', 'InVision', 'Atom']}
            />
          </Slide>
          <Slide>
            <Project
              media={iuzeit}
              name="iuzeit"
              tagline="Shaping the ECommerce Journey"
              description="We refined the challenges of a traditional e-commerce journey to create a markeplace that helps prioritize what products matter most—all in one sleek, modern interface."
              services={['UX/UI Design', 'Brand Strategy']}
              tools={['Adobe XD', 'Sketch', 'InVision', 'Zeplin']}
            />
          </Slide>
          <Slide>
            <Project
              media={stallion}
              name="Stallion Oilfield Services"
              tagline="Taking Field Analytics To A New Level"
              description="We took data vizualization to the next level by building a robust interface that simplified complex data streams and allowed snapshot statistics of vital KPIs."
              services={['UX/UI Design', 'QA Testing', 'Development']}
              tools={['Pen + Paper', 'Sketch', 'InVision', 'Trello']}
            />
          </Slide>
          <Slide>
            <Project
              media={georgiaPacific}
              name="Georgia-Pacific"
              tagline="Transforming how Logistics Gets Done"
              description="We tailor-fit a new check-in/check-out system for outdoor professionals that allowed Georgia-Pacific to quickly give their logisitics team an efficiency boost."
              services={['Design Partnership', 'UX/UI Design']}
              tools={['Balsamiq', 'Figma', 'Sketch', 'InVision']}
            />
          </Slide>
          <Slide>
            <Project
              media={fusemap}
              name="Fusemap"
              tagline="Thinking Smarter About How We Power The World"
              description="Using their cloud-based tool, we captured and vizualized the complex operational tasks of automated and AI-powered building management."
              services={['Project Management', 'UX/UI Design']}
              tools={['Trello', 'Balsamiq', 'Sketch', 'InVision']}
            />
          </Slide>
          <Slide>
            <Project
              media={hcp}
              name="Healthcare Compliance Pros"
              tagline="Setting the Standard in Healthcare-Literally"
              description="Designing for a multi-billion user industry, we evolved the HCP’S online suite into a feature-rich tool that maintainS strict legal compliance, engages users, and fosters long-term retention."
              services={['Project Management', 'UX/UI Design']}
              tools={['Trello', 'Adobe XD', 'Sketch', 'InVision']}
            />
          </Slide>

        </Carousel>

    </div>
  )
}


export default ClientWork
