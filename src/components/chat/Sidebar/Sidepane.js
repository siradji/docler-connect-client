/* eslint-disable no-shadow */
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { activepage } from '../../../utils/general'
import { unReadMsg, readMsg } from '../../../state/actions/settingsActions'
import './style.scss'

import { chatIcon, userIcon, settingsIcon } from './icons'

const Sidepane = ({ messages, unReadMsg, readMsg, newMsg }) => {
  //  current msg
  const ref = useRef(messages.length)

  useEffect(() => {
    //  check to see if there is a new message

    if (!activepage('/chat') && ref.current !== messages.length) {
      unReadMsg()
    } else {
      readMsg()
    }
  }, [messages.length])
  const unreadCount = messages.length - ref.current
  return (
    <div className="wrapper-sidebar">
      <div className="inner-sidebar">
        <NavLink
          className={newMsg ? 'nav-item-unread' : 'nav-item'}
          exact
          activeClassName="nav-active"
          key={1}
          to="/chat"
        >
          {chatIcon}
          {newMsg && <span className="unreadCounter">{unreadCount}</span>}
        </NavLink>
        <NavLink
          className="nav-item"
          exact
          activeClassName="nav-active"
          key={2}
          to="/users"
        >
          {userIcon}
        </NavLink>
        <NavLink
          className="nav-item"
          exact
          activeClassName="nav-active"
          key={3}
          to="/settings"
        >
          {settingsIcon}
        </NavLink>
      </div>
    </div>
  )
}

Sidepane.propTypes = {
  unReadMsg: PropTypes.func.isRequired,
  readMsg: PropTypes.func.isRequired,
  newMsg: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf({}).isRequired,
}
const mapStateToProps = state => ({
  messages: state.chat.messages,
  newMsg: state.chat.newMsg,
})

const mapDispatchToProps = {
  readMsg,
  unReadMsg,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidepane)
