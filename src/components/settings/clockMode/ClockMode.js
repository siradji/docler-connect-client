/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

const ClockMode = ({ onChange, isChecked, value, title }) => (
  <div className="settings-clockmode">
    <div className="settings-clocks">
      <p className="clockmode-label">{title}</p>
      <input
        type="radio"
        className="clock-radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
    </div>
  </div>
)

ClockMode.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default ClockMode
