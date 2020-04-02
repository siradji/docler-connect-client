/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { writeItem, setSettings } from '../../../utils/localStorage'
import '../style.scss'

const InterfaceColor = () => {
  // set default to the value equals to local storage
  useEffect(() => {
    setSettings('theme', 'theme')
  }, [])

  //  set the choosen theme to local storage
  const handleChange = e => {
    const value = e.target.id
    writeItem('theme', value)
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

export default InterfaceColor
