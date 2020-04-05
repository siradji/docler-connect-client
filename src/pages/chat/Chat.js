/* eslint-disable no-shadow */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMessage, getUsers, disconnect } from '../../state/actions/socketIO'
//  core components
import Sidepane from '../../components/chat/Sidebar'
import ChatArea from '../../components/chat/chatarea'
import UserCard from '../../components/users'
import './style.scss'

const Chat = ({ disconnect, getUsers, getMessage, chat: { users } }) => {
  useEffect(() => {
    getMessage()
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
  getMessage: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
  chat: PropTypes.shape({
    users: PropTypes.array.isRequired,
  }).isRequired,
}
//  redux
const mapDispatchToProps = {
  getMessage,
  getUsers,
  disconnect,
}

const mapStateToProps = state => ({
  chat: state.chat,
})

const exports = React.memo(Chat)
export default connect(mapStateToProps, mapDispatchToProps)(exports)
