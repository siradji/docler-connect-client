import React from 'react'

import Sidepane from '../../components/chat/Sidebar'
import ChatArea from '../../components/chat/chatarea'
import Users from '../../components/users/Users'

import './style.scss'

const Chat = () => (
  <div className="wrapper-chat">
    <div className="inner-chat">
      <div className="sidepane">
        <Sidepane />
      </div>
      <div className="users">
        <Users />
      </div>
      <div className="chat">
        <ChatArea />
      </div>
    </div>
  </div>
)

export default Chat
