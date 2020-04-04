import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AppRoute from './components/global/AppRoute'

import './App.scss'

const App = ({ settings: { darkTheme } }) => {
  //  THEMEING BASED ON THE THEME SELECTED
  useEffect(() => {
    if (darkTheme === 'dark') {
      document.querySelector('#main').classList.add('dark')
    } else {
      document.querySelector('#main').classList.remove('dark')
    }
  }, [darkTheme])
  return (
    <main id="main">
      <AppRoute />
    </main>
  )
}

App.propTypes = {
  settings: PropTypes.shape({
    darkTheme: PropTypes.string.isRequired,
  }).isRequired,
}
const mapToStateProps = state => ({
  settings: state.settings,
})

export default connect(mapToStateProps)(App)
