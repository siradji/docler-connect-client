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
  //  check to sse if message is from the current user
  let isSentByUser = false
  if (username === user) {
    isSentByUser = true
  }
  //  display message based on the outcome of the function above
  return isSentByUser ? (
    <>
      <div className="msg-wrapper SentContainer ">
        <div className="msg-container sent">
          <p className="msg">{text}</p>
        </div>
        <TimeStamp clockMode={clockMode} />
      </div>
    </>
  ) : (
    <>
      <div className="msg-wrapper recievedContainer">
        <User user={user} />
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
