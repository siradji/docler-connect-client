import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const MessageButton = ({ onClick }) => (
  <button className="message-button" onClick={onClick}>
    +
  </button>
)

MessageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}
export default MessageButton
