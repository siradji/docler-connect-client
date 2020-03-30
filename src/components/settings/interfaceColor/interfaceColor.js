/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import '../style.scss'

const interfaceColor = () => (
    <div className="settings-interface">
      <p className="interface-label">Enable Dark theme </p>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  )

export default interfaceColor
