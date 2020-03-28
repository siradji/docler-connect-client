import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ roomName }) => {
  return <div className="wrapper-header">header</div>
}

Header.propTypes = {
  roomName: PropTypes.string.isRequired,
}
export default Header
