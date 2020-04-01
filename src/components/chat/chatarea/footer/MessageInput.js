import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const MessageInput = ({ onChange, value, onEnter }) => (
  <input
    className="message-input"
    value={value}
    placeholder="Hi! How are you ?"
    onChange={onChange}
    onKeyPress={e => (e.key === 'Enter' ? onEnter : null)}
  />
)

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default MessageInput
