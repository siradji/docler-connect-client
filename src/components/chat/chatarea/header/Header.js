import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Header = ({ roomName }) => <div className="wrapper-header">{roomName}</div>

Header.propTypes = {
  roomName: PropTypes.string.isRequired,
}
export default Header
