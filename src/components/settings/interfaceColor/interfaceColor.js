/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

import '../style.scss'

const InterfaceColor = ({ onChange, value, isChecked }) => (
  <div className="settings-interface">
    <p className="interface-label">Enable Dark theme </p>
    <label className="switch">
      <input
        type="checkbox"
        value={value ? 'enabled' : 'disabled'}
        checked={isChecked}
        onChange={onChange}
      />
      <span className="slider round" />
    </label>
  </div>
)

InterfaceColor.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InterfaceColor
