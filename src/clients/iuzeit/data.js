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
  name: 'Iuzeit',
  route: '/work/detail/iuzeit',
  logo: {
    color: logoColor,
    white: logoWhite
  },
  background: bg,
  title: "With iuzeit, finding the product that meets a user’s exact lifestyle need is only a few clicks away.  We refined the challenges of a traditional e-commerce journey to create a markeplace that helps prioritize what products matter most—all in one sleek, modern interface.",
  subtitle: "Shaping the future of the online purchase journey.",
  industry: "E-Commerce Site",
  tagline: 'is shapping the future of the online purchase journey.',
  ask: 'Build a seamless design system that prioritizes ratings and reviews in one place.',
  services: ['UX Research & Analysis', 'Prototyping', 'High-Fidelity UI Design', 'User Testing'],
  tools: ['Adobe XD', 'Sketch', 'InVision', 'Zeplin'],
  images: images
}


export default data
