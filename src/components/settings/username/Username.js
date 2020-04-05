/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { writeItem, setSettings } from '../../../utils/localStorage'
import { loadSettings } from '../../../state/actions/settingsActions'

import '../style.scss'

const Username = ({ loadSettings }) => {
  const [state, setstate] = useState('')

  //  set the default setting to value the value of the local storage
  useEffect(() => {
    setSettings('sendOption', 'sendWithCtrl')
    loadSettings()
  }, [state])

  //  save selected value to local storage
  const handleChange = e => {
    const value = e.target.id
    writeItem('username', value)
    setstate(value)
  }

  return (
    <div className="settings-username">
      <p className="username-label">Change Username</p>
      <input className="username-input" value={state} onChange={handleChange} />
    </div>
  )
}

Username.propTypes = {
  loadSettings: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  loadSettings,
}
export default connect(null, mapDispatchToProps)(Username)
