import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { sendMsg } from '../../../../state/actions/socketIO'

import MessageButton from './MessageButton'
import MessageInput from './MessageInput'

import './style.scss'

// eslint-disable-next-line no-shadow
const Footer = ({ sendMsg }) => {
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const sendMessage = () => {
    if (message) {
      sendMsg(message)
    }
    setMessage('')
  }
  return (
    <div className="wrapper-footer">
      <div className="inner-footer">
        <MessageInput
          value={message}
          onChange={handleChange}
          onEnter={sendMessage}
        />
        <MessageButton onClick={sendMessage} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  sendMsg: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  sendMsg,
}

export default connect(null, mapDispatchToProps)(Footer)
