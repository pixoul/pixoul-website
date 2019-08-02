/* Images */
import bg from "./images/bg.png"
import logoColor from "./images/logo-color.jpg"
import logoWhite from "./images/logo-white.png"
import screen1 from "./images/screen-1.png"
import screen2 from "./images/screen-2.png"
import screen3 from "./images/screen-3.png"
import screen4 from "./images/screen-4.png"
import screen5 from "./images/screen-5.png"
import screen6 from "./images/screen-6.png"

const images = [
  { media: screen1 },
  { media: screen2 },
  { media: screen3 },
  { media: screen4 },
  { media: screen5 },
  { media: screen6 },
]

const data = {
  name: 'Fusemap',
  route: '/work/detail/fusemap',
  logo: {
    color: logoColor,
    white: logoWhite
  },
  background: bg,
  title: "Working with Fusemap was a chance to redefine how we interpret basic, everyday tasks.  Using their cloud-based tool, we captured and vizualized the complex operational tasks of automated and AI-powered building management.",
  subtitle: "Thinking smarter about how we power the world.",
  industry: "Enterprise System",
  tagline: 'is thinking smarter about how we power the world.',
  ask: 'Lead the over-arching design of an AI-powered energy management system.',
  services: ['Project Management', 'UX Research & Analysis', 'High-Fidelity UI Design', 'Prototyping & Testing'],
  tools: ['Trello', 'Balsamiq', 'Sketch', 'InVision'],
  images: images
}


export default data
