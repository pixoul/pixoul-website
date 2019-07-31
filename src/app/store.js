import { createStore, combineReducers } from 'redux'

import navigation from 'layout/navigation/reducers'

let pixoulApp = combineReducers({
  navigation: navigation
})

export const store = createStore(pixoulApp)
