/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './style.scss'

// eslint-disable-next-line no-shadow
const Header = ({ roomName, chat: { users } }) => {
  //  handle to disconnect from chat and logout
  const handledisconnectChat = () => {
    window.location.reload()
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
  chat: PropTypes.shape({
    users: PropTypes.array.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  chat: state.chat,
})

const exports = React.memo(Header)
export default connect(mapStateToProps)(exports)
