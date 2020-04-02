/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'
import { writeItem, setSettings } from '../../../utils/localStorage'

import '../style.scss'

const SendOption = () => {
  //  set the default setting to value the value of the local storage
  useEffect(() => {
    setSettings('sendOption', 'sendWithCtrl')
  }, [])

  //  save send choice mode to local storage
  const handleChange = e => {
    const value = e.target.id
    writeItem('sendWithCtrl', value)
  }

  return (
    <div className="settings-items">
      <p className="settings-heading">Interface Color</p>
      <div className="inputGroup">
        <input onChange={handleChange} id="on" name="sendOption" type="radio" />
        <label htmlFor="on">Light</label>
      </div>
      <div className="inputGroup">
        <input onChange={handleChange} id="off" name="sendOption" type="radio" />
        <label htmlFor="off">Dark</label>
      </div>
    </div>
  )
}

export default SendOption
