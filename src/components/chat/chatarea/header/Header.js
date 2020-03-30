import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Header = ({ roomName }) => (
  <div className="wrapper-header">
    <h1 className=" header-heading">{roomName}</h1>
    <p className="header-lead"> 5 Users Online</p>
  </div>
)

Header.propTypes = {
  roomName: PropTypes.string.isRequired,
}
export default Header
