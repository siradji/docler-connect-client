import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user }) => (
  <div className="msg-top">
    <p className="msg-user">{user}</p>
  </div>
)

User.propTypes = {
  user: PropTypes.string.isRequired,
}
export default User
