/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

//  core components
import User from './user'
import TimeStamp from './timestamp'
import './style.scss'

const Message = ({
  message: { user, text },
  settings: { clockMode },
  chat: { username },
}) => {
  let isSentByUser = false
  if (username !== user) {
    isSentByUser = true
  }

  return isSentByUser ? (
    <>
      <div className="msg-wrapper sentContainer">
        <User user={user} />
        <div className="msg-container sent">
          <p className="msg">{text}</p>
        </div>
        <TimeStamp clockMode={clockMode} />
      </div>
    </>
  ) : (
    <>
      <div className="msg-wrapper recievedContainer ">
        <div className="msg-container recieved">
          <p className="msg">{text}</p>
        </div>
        <TimeStamp clockMode={clockMode} />
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  settings: state.settings,
  chat: state.chat,
})

const exports = React.memo(Message)
export default connect(mapStateToProps)(exports)
