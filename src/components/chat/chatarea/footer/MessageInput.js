import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './style.scss'

const MessageInput = ({ onChange, value, onEnter, settings: { cltrEnter } }) => {
  const sendOnEnter = e => {
    if (cltrEnter === 'on') {
      if (e.ctrlKey && e.keyCode === 13) {
        onEnter()
      }
    } else {
      // eslint-disable-next-line no-unused-expressions
      null
    }
  }

  return (
    <input
      className="message-input"
      value={value}
      placeholder="Hi! How are you ?"
      onChange={onChange}
      onKeyDown={sendOnEnter}
    />
  )
}

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    cltrEnter: PropTypes.string.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  settings: state.settings,
})
export default connect(mapStateToProps)(MessageInput)
