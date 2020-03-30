import React from 'react'

import UserCard from '../../components/users'
import ChatArea from '../../components/chat/chatarea'
import Sidepane from '../../components/chat/Sidebar'

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

const UsersList = () => (
  <div className="users-container">
    <div className="user-lists">
      {users.map(({ name, isOnline }) => (
        <UserCard isOnline={isOnline} name={name} key={name} />
      ))}
    </div>
  </div>
)

const Users = () => (
  <div className="wrapper-chat">
    <div className="inner-chat">
      <div className="sidepane">
        <Sidepane />
      </div>
      <div className="users">
        <UsersList />
      </div>
      <div classNames="users-mobile">
        <UsersList />
      </div>
      <div className="chat users-chat">
        <ChatArea />
      </div>
    </div>
  </div>
)

export default Users
