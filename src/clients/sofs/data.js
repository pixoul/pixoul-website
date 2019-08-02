/* Images */
import bg from "./images/bg.png"
import logoColor from "./images/logo-color.svg"
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
  name: 'Stallion Oilfield Services',
  route: '/work/detail/sofs',
  logo: {
    color: logoColor,
    white: logoWhite
  },
  background: bg,
  title: "Working with Stallion meant taking data visualization to the next level.  By doing a deep-dive into the world of oilfield services, we built a robust interface that simplified complex data streams and allowed snapshot statistics of vital KPIs.",
  subtitle: "Taking field analytics to a whole new level.",
  industry: "Analytics Dashboard",
  tagline: 'is taking field analytics to a whole new level.',
  ask: 'Build a display to an analytics engine that fits the needs of businesses and technicians.',
  services: ['Analytics Review', 'Low-Fi Sketching', 'High-Fi Prototyping', 'Development QA Support'],
  tools: ['Pen + Paper', 'Sketch', 'InVision', 'Trello'],
  images: images
}


export default data
