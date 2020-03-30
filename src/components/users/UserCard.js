import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Users = ({ name, isOnline }) => (
  <div className="wrapper-users">
    <h3>{name}</h3>
    <p>{isOnline ? 'Online' : 'offline'}</p>
  </div>
)

Users.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default Users
