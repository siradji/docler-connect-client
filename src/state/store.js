import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//  our middlewares
import thunk from 'redux-thunk'
import socketMiddleware from './middlewares/socketMiddleware'

import rootReducer from './reducers'

const initialState = {}
const middlewares = [thunk, socketMiddleware()]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export default store
