/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadSettings } from '../../../state/actions/settingsActions'

import { writeItem, setSettings } from '../../../utils/localStorage'

const ClockMode = ({ loadSettings }) => {
  const [state, setstate] = useState('')
  //  save choosen clock mode to local storage
  useEffect(() => {
    setSettings('clock', 'clockMode')
    loadSettings()
  }, [state])

  const handleChange = e => {
    const value = e.target.id
    writeItem('clockMode', value)
    setstate(value)
  }

  return (
    <div className="settings-items">
      <p className="settings-heading">Clock Mode</p>
      <div className="inputGroup">
        <input onChange={handleChange} id="12" name="clock" type="radio" />
        <label htmlFor="12">12 Hours</label>
      </div>
      <div className="inputGroup">
        <input onChange={handleChange} id="24" name="clock" type="radio" />
        <label htmlFor="24">24 Hours</label>
      </div>
    </div>
  )
}

ClockMode.propTypes = {
  loadSettings: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  loadSettings,
}
export default connect(null, mapDispatchToProps)(ClockMode)
