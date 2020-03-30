/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import PropTypes from 'prop-types'

const ClockMode = ({ onChange, isChecked, value, id }) => (
  <div className="settings-clockmode">
    <div className="settings-clocks">
      <p id="24-hours" className="clockmode-label">
        24 hours clock
      </p>
      <input
        type="radio"
        className="clock-radio"
        id={id}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
    </div>
  </div>
)

ClockMode.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
export default ClockMode
