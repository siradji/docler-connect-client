/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './style.scss'

const Header = ({ roomName, chat: { users } }) => (
  <div className="wrapper-header">
    <h1 className=" header-heading">{roomName} </h1>
    <p className="header-lead">{users.length} User(s) Online</p>
  </div>
)

Header.propTypes = {
  roomName: PropTypes.string.isRequired,
  chat: PropTypes.shape({
    users: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  chat: state.chat,
})

const exports = React.memo(Header)
export default connect(mapStateToProps)(exports)
