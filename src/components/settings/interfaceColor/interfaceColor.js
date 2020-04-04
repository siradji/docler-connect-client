/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { writeItem, setSettings } from '../../../utils/localStorage'
import { loadSettings } from '../../../state/actions/settingsActions'

import '../style.scss'

// eslint-disable-next-line no-shadow
const InterfaceColor = ({ loadSettings }) => {
  const [state, setstate] = useState('')
  // set default to the value equals to local storage
  useEffect(() => {
    setSettings('theme', 'theme')
    loadSettings()
  }, [state])

  //  set the choosen theme to local storage
  const handleChange = e => {
    const value = e.target.id
    writeItem('theme', value)
    setstate(value)
  }
  return (
    <div className="settings-items">
      <p className="settings-heading">Interface Color</p>
      <div className="inputGroup">
        <input onChange={handleChange} id="light" name="theme" type="radio" />
        <label htmlFor="light">Light</label>
      </div>
      <div className="inputGroup">
        <input onChange={handleChange} id="dark" name="theme" type="radio" />
        <label htmlFor="dark">Dark</label>
      </div>
    </div>
  )
}

InterfaceColor.propTypes = {
  loadSettings: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  loadSettings,
}
export default connect(null, mapDispatchToProps)(InterfaceColor)
