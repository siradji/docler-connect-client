/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

import '../style.scss'

const SendOption = ({ onChange, value, isChecked }) => (
  <div className="settings-interface">
    <p className="interface-label">Enable Send With Enter</p>
    <label className="switch">
      <input type="checkbox" value={value} onChange={onChange} checked={isChecked} />
      <span className="slider round" />
    </label>
  </div>
)

SendOption.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default SendOption
