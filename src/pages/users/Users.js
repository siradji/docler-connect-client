/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import UserCard from '../../components/users'
import Sidepane from '../../components/chat/Sidebar'

import './style.scss'

const Users = ({ chat: { users } }) => (
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
      <div classNames="users-mobile">
        <div className="user-lists">
          {users.map(({ username, id }) => (
            <UserCard isOnline name={username} key={id} />
          ))}
        </div>
      </div>
    </div>
  </div>
)
Users.propTypes = {
  chat: PropTypes.shape({
    users: PropTypes.shape({
      username: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  chat: state.chat,
})

export default connect(mapStateToProps)(Users)
