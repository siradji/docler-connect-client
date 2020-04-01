import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { joinRoom, getMessage } from '../../state/actions/socketIO'
//  core components
import Sidepane from '../../components/chat/Sidebar'
import ChatArea from '../../components/chat/chatarea'
import UserCard from '../../components/users'
import './style.scss'

const users = [
  {
    name: 'jake',
    isOnline: true,
  },
  {
    name: 'Amanda',
    isOnline: true,
  },
  {
    name: 'Lisa',
    isOnline: false,
  },
]

// eslint-disable-next-line no-shadow
const Chat = ({ getMessage, joinRoom, chat: { username, room } }) => {
  useEffect(() => {
    joinRoom({ username, room })
    // getMessage()
    getMessage()
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
              {users.map(({ name, isOnline }) => (
                <UserCard isOnline={isOnline} name={name} key={name} />
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
  chat: PropTypes.shape({
    room: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
}
//  redux
const mapDispatchToProps = {
  joinRoom,
  getMessage,
}

const mapStateToProps = state => ({
  chat: state.chat,
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
