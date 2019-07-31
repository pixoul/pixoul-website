

import designThinking from "./images/design-thinking.jpg"
import userExperience from "./images/user-experience.jpg"
import userInterface from "./images/user-interface.jpg"
import iterativeTesting from "./images/iterative-testing.jpg"

const list = []

list.push({
  direction: 'rtl',
  media: designThinking,
  title: '01. Design Thinking Process',
  subtitle: 'Supported by our data and research initiatives, we use industry proven Design Thinking techniques to promote strong user- and human-centered design.',
  details: {
    'Empathy + Creativity': 'Design to make purposeful impact on entire communitites.',
    'The Three I’s': 'Inspire, ideate, and implement solutions that matter.'
  }
})

list.push({
  direction: 'ltr',
  media: userExperience,
  title: '02. User Experience (UX) Design',
  subtitle: 'Compelling digital experiences begin with an understanding of your goals.',
  details: {
    'Brainstorming': 'Ensure product is accessible, innovative, and empathetic.',
    'Great Design': 'Create value propositions and dive into product culture.'
  }
})

list.push({
  direction: 'rtl',
  media: userInterface,
  title: '03. User Interface (UI) Design',
  subtitle: 'We know great experiences neccessitate a beautiful design aesthetic.',
  details: {
    'Modern, Clean Design': 'Captivate with an easy-to-use design that’s equally stunning.',
    'Scalable Systems': 'Become device-agnostic with motion interaction.'
  }
})

list.push({
  direction: 'ltr',
  media: iterativeTesting,
  title: '04. Iterative Testing & Analysis',
  subtitle: 'Design begins with great research—and it ends with it, too.',
  details: {
    'Agile Approach': 'Testing and iterative design is baked-in to every sprint cycle.',
    'Bottom-Line Economics': 'Utilize data-driven field studies, guerilla tests, focus groups, etc.'
  }
})



export default list
