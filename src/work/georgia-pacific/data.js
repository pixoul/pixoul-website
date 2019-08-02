/* Images */
import bg from "./images/bg.png"
import logoColor from "./images/logo-color.jpg"
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
  name: 'Georgia Pacific',
  route: '/work/detail/georgia-pacific',
  logo: {
    color: logoColor,
    white: logoWhite
  },
  background: bg,
  title: "In partnership with Army of Bees, we designed a new check-in/check-out system that allowed Georgia-Pacific to quickly give their logisitics team an efficiency boost.  We built the product tailor-fit for outdoor professionals, and even designed it to minimzie sun glare.",
  subtitle: "Transforming how logistics gets done.",
  industry: "Kiosk Interface",
  tagline: 'is transforming how logistics gets done.',
  ask: 'Build a tablet design for easy check-in/check-out  and logistics coordination.',
  services: ['Design Partnership', 'UX Research & Analytics', 'Low-Fi Wireframing', 'User Interface Design'],
  tools: ['Balsamiq', 'Figma', 'Sketch', 'InVision'],
  images: images
}


export default data
