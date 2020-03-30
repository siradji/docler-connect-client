import React from 'react'

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
  {
    name: 'Lisa',
    isOnline: false,
  },
  {
    name: 'Lisa',
    isOnline: false,
  },
  {
    name: 'Lisa',
    isOnline: false,
  },
  {
    name: 'Lisa',
    isOnline: false,
  },
  {
    name: 'Lisa',
    isOnline: false,
  },
]

const Chat = () => (
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

export default Chat
