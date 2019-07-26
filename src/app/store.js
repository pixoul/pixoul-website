import { createStore, combineReducers } from 'redux'

import sideMenu from 'layout/side-menu/reducers'

let pixoulApp = combineReducers({
  menu: sideMenu
})

export const store = createStore(pixoulApp)
