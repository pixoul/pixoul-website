import { createStore, combineReducers } from 'redux'

import sideMenu from 'layout/navigation-menu/reducers'

let pixoulApp = combineReducers({
  menu: sideMenu
})

export const store = createStore(pixoulApp)
