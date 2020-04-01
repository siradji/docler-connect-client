/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

//  core components
import User from './User'
import TimeStamp from './TimeStamp'
import './style.scss'

const Message = ({
  message: { user, text },
  settings: { clockMode24 },
  chat: { username },
}) => {
  let isSentByUser = false
  const trimmed = username.toLowerCase().trim()
  if (user === trimmed) {
    isSentByUser = true
  }

  return isSentByUser ? (
    <>
      <div className="msg-wrapper sent">
        <User user={user} />
        <div className="msg-container">
          <p className="msg">{text}</p>
        </div>
        <TimeStamp clockMode={clockMode24} />
      </div>
    </>
  ) : (
    <>
      <div className="msg-wrapper recieved">
        <User user={user} />
        <div className="msg-container">
          <p className="msg">{text}</p>
        </div>
        <TimeStamp clockMode={clockMode24} />
      </div>
    </>
  )
}

// Message.propTypes = {
//   message:
// }
const mapStateToProps = state => ({
  settings: state.settings,
  chat: state.chat,
})

export default connect(mapStateToProps)(Message)
