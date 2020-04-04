/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { writeItem, setSettings } from '../../../utils/localStorage'
import { loadSettings } from '../../../state/actions/settingsActions'

import '../style.scss'

const SendOption = ({ loadSettings }) => {
  const [state, setstate] = useState('')

  //  set the default setting to value the value of the local storage
  useEffect(() => {
    setSettings('sendOption', 'sendWithCtrl')
    loadSettings()
  }, [state])

  //  save send choice mode to local storage
  const handleChange = e => {
    const value = e.target.id
    writeItem('sendWithCtrl', value)
    setstate(value)
  }

  return (
    <div className="settings-items">
      <p className="settings-heading">Send Message on Ctrl + enter</p>
      <div className="inputGroup">
        <input onChange={handleChange} id="on" name="sendOption" type="radio" />
        <label htmlFor="on">Yes</label>
      </div>
      <div className="inputGroup">
        <input onChange={handleChange} id="off" name="sendOption" type="radio" />
        <label htmlFor="off">No</label>
      </div>
    </div>
  )
}

SendOption.propTypes = {
  loadSettings: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  loadSettings,
}
export default connect(null, mapDispatchToProps)(SendOption)
