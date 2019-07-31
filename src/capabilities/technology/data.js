

import frontendDev from "./images/frontend-dev.jpg"
import mobileApps from "./images/mobile-apps.jpg"
import ecommerceSystems from "./images/ecommerce-systems.jpg"
import cloudImplementations from "./images/cloud-implementations.jpg"

const list = []

list.push({
  direction: 'rtl',
  media: {
    image: frontendDev,
    width: 606,
    height: 563
  },
  title: '01. Front End Development',
  subtitle: 'We use responsive design to build websites, desktop applications, progressive web apps, and much more.',
  details: {
    'Powerful Tools': 'Leverage the most up-to-date and secure frameworks.',
    'Seamless Integration': 'Build with existing architecture in mind.'
  }
})

list.push({
  direction: 'ltr',
  media: {
    image: mobileApps,
    width: 606,
    height: 563
  },
  title: '02. Mobile & IoT Applications',
  subtitle: 'Beyond responsive web and application development, our human-centered design processes help us to build and support iOS and Android applications.',
  details: {
    'Mobile': 'Scale applications for the most popular operating systems.',
    'Beyond Mobile': 'Expand with wearables, voice-user interfaces, and more.'
  }
})

list.push({
  direction: 'rtl',
  media: {
    image: ecommerceSystems,
    width: 606,
    height: 563
  },
  title: '03. Scalable Ecommerce Systems',
  subtitle: 'Working alongside Google’s ecommerce standards, we implement solutions from a range of secure providers.',
  details: {
    'Payment Solutions': 'Integrate with top-tier payment gateways.',
    'Thinking Bigger': 'Design for categories, products, and conversion funnels.'
  }
})

list.push({
  direction: 'ltr',
  media: {
    image: cloudImplementations,
    width: 606,
    height: 563
  },
  title: '04. API, CMS & Cloud Implementations',
  subtitle: 'Our custom builds allow for seamless API integration, cloud opportunities, and assimilation with robust and secure content management systems.',
  details: {
    'Familiar Approaches': 'Work with popularsystems, like Wordpress, Drupal, and Joomla.',
    'Future-Proof': 'Architect for today’s necessities and tomorrow’s advances.'
  }
})



export default list
