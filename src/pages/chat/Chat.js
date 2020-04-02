/* eslint-disable no-shadow */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  joinRoom,
  getMessage,
  getUsers,
  disconnect,
} from '../../state/actions/socketIO'
//  core components
import Sidepane from '../../components/chat/Sidebar'
import ChatArea from '../../components/chat/chatarea'
import UserCard from '../../components/users'
import './style.scss'

const Chat = ({
  getUsers,
  getMessage,
  joinRoom,
  disconnect,
  chat: { username, room, users },
}) => {
  useEffect(() => {
    //  function to send user back to the server on join
    joinRoom({ username, room })
    // getMessage all  emitted messages from server
    getMessage()
    //  Get all users in the room
    getUsers()
    return () => {
      disconnect()
    }
  }, [])

  return (
    <div className="wrapper-chat">
      <div className="inner-chat">
        <div className="sidepane">
          <Sidepane />
        </div>
        <div className="users">
          <div className="users-container">
            <div className="user-lists">
              {users.map(({ username, id }) => (
                <UserCard isOnline name={username} key={id} />
              ))}
            </div>
          </div>
        </div>
        <div className="chat">
          <ChatArea />
        </div>
      </div>
    </div>
  )
}

//  declaring proptypes
Chat.propTypes = {
  joinRoom: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  chat: PropTypes.shape({
    room: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
  }).isRequired,
}
//  redux
const mapDispatchToProps = {
  joinRoom,
  getMessage,
  getUsers,
  disconnect,
}

const mapStateToProps = state => ({
  chat: state.chat,
})

const exports = React.memo(Chat)
export default connect(mapStateToProps, mapDispatchToProps)(exports)
