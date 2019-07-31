
import designWorkshops from "./images/design-workshops.jpg"
import analyticInsights from "./images/analytic-insights.jpg"
import digitalAudits from "./images/digital-audits.jpg"
import digitalPlanning from "./images/digital-planning.jpg"

const list = []

list.push({
  direction: 'rtl',
  media: {
    image: designWorkshops,
    width: 606,
    height: 563
  },
  title: '01. Design Thinking Workshops',
  subtitle: 'As a design community, we believe human interaction is at the heart of everything we build.',
  details: {
    'Collaborative Design': 'Work with everyone—from analysts to C-Suite executives.',
    'KPI-Based Outcomes': 'Build a strategy that delivers maximum, scalable impact.'
  }
})

list.push({
  direction: 'ltr',
  media: {
    image: analyticInsights,
    width: 606,
    height: 563
  },
  title: '02. Data Insights & Analytics',
  subtitle: 'Our research teams believe transformational strategy starts with powerful data and a focus on consumer insights.',
  details: {
    'Digging Deeper': 'Understand user sentiment and unlock market potential.',
    'Capitalize on ROI': 'Identify new revenue streams and find your digital voice.'
  }
})

list.push({
  direction: 'rtl',
  media: {
    image: digitalAudits,
    width: 606,
    height: 563
  },
  title: '03. Comprehensive Digital Audits',
  subtitle: 'Backed with data, we help you uncover new ways of presenting your digital message.',
  details: {
    'Start with a Benchmark': 'Analyze industry trends and determine your unique value.',
    'Understand the Market': 'Find unfulfilled marketspace to craft the right presence.'
  }
})

list.push({
  direction: 'ltr',
  media: {
    image: digitalPlanning,
    width: 606,
    height: 563
  },
  title: '04. Digital Planning & Roadmapping',
  subtitle: 'We know each project is unique, and every digital landscape has its own challenges.',
  details: {
    'In-Depth Strategy': 'Provide a complete guide—timelines, budgets, and more.',
    'The Road Ahead': 'Know what’s coming up next with our roadmapping services.'
  }
})



export default list
