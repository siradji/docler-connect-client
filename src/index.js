import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'

// redux
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const root = document.getElementById('app')
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
)
