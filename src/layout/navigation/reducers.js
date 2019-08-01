import { TOGGLE_MENU } from "./actions"

const initialState = {
  open: false,
  links: [{
    label: 'Home',
    route: '/home'
  },
  {
    label: 'Work',
    route: '/work'
  },
  {
    label: 'Capabilities',
    route: '/capabilities'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Contact',
    route: '/contact'
  }]
}


function sideMenu(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        open: action.open
      }
    default:
      return state
  }
}


export default sideMenu
