import { combineReducers } from 'redux'

// reducers
import settingsReducer from './settingsReducer'
import chatReducer from './chatReducer'

export default combineReducers({
  settings: settingsReducer,
  chat: chatReducer,
})
