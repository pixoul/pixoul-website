/* Images */
import bg from "./images/bg.png"
import logoColor from "./images/logo-color.png"
import logoWhite from "./images/logo-white.svg"
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
  name: 'HCP',
  route: '/work/detail/hcp',
  logo: {
    color: logoColor,
    white: logoWhite
  },
  background: bg,
  title: "Designing for a multi-billion user industry, we evolved the Healthcare Compliance Pros online suite into a feature-rich tool that helps maintain strict legal compliance, engages users, and fosters long-term retention.",
  subtitle: "Setting the standard in healthcare—literally.",
  industry: "Dashboard Matrix",
  tagline: 'is setting the standard in healthcare—literally.',
  ask: 'Overhaul the design and functionality of a leading healthcare compliance tool.',
  services: ['UX Research & Analysis', 'High-Fidelity UI Design', 'Demo & Prototyping', 'User Testing'],
  tools: ['Trello', 'Adobe CC', 'Sketch', 'InVision'],
  images: images
}


export default data
