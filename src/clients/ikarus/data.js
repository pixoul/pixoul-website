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
  name: 'Ikarūs',
  route: '/work/detail/ikarus',
  logo: {
    color: logoColor,
    white: logoWhite
  },
  background: bg,
  title: "Ikarūs is changing what it means to buy, sell, and trade businesses.  Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public.",
  subtitle: "Redefining the business marketplace.",
  industry: "Corporate Site",
  tagline: 'is redefining the business marketplace.',
  ask: 'Create and brand a business marketplace, including a full-service transaction center.',
  services: ['UX Research & Analysis', 'High-Fidelity UI Design', 'User Testing', 'Front-End Development'],
  tools: ['Balsamiq', 'Sketch', 'InVision', 'Atom'],
  images: images
}


export default data
