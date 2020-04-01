import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const UserNameInput = ({ onChange, value }) => (
  <input
    className="username-input"
    placeholder="Choose Username"
    value={value}
    onChange={onChange}
  />
)

UserNameInput.defaultProps = {
  onChange: null,
  value: null,
}
UserNameInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}
UserNameInput.propTypes = {}

export default UserNameInput
