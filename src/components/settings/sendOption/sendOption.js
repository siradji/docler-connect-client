/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import '../style.scss'

const SendOption = () => (
    <div className="settings-interface">
      <p className="interface-label">Enable Send With Enter</p>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  )

export default SendOption
