/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { disconnectChat } from '../../../../state/actions/socketIO'
import { logOut } from '../../../../state/actions/settingsActions'
import './style.scss'

// eslint-disable-next-line no-shadow
const Header = ({ roomName, chat: { users }, disconnectChat, logOut }) => {
  const handledisconnectChat = () => {
    disconnectChat()
    logOut()
  }
  return (
    <div className="wrapper-header">
      <h1 className=" header-heading">{roomName} </h1>
      <p className="header-lead">{users.length} User(s) Online</p>
      <button className="disconnectChat" onClick={handledisconnectChat}>
        X
      </button>
    </div>
  )
}
Header.propTypes = {
  roomName: PropTypes.string.isRequired,
  disconnectChat: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  chat: PropTypes.shape({
    users: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  chat: state.chat,
})

const mapDispatchToProps = {
  disconnectChat,
  logOut,
}
const exports = React.memo(Header)
export default connect(mapStateToProps, mapDispatchToProps)(exports)
