import React from 'react'

import { createGlobalStyle } from 'styled-components'
import AppRoute from './components/global/AppRoute'

const App = () => (
  <>
    <GlobalStyle />
    <AppRoute />
  </>
)

// Resets and global styling
const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: san-serif
  font-size: 10px;
  position: relative;
}

`
export default App
