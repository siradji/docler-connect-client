import React from 'react'

import { createGlobalStyle } from 'styled-components'
import AppRoute from './components/global/AppRoute'

const App = () => (
  <>
    <AppRoute />
  </>
)

// Resets and global styling
const GlobalStyle = createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;
}

body{
  font-family: san-serif
  font-size: 10px;
  position: relative;
}

`
export default App
