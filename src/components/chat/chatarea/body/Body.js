import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Body = ({ children }) => <div className="wrapper-body">{children}</div>

Body.propTypes = {
  children: PropTypes.shape({
    message: PropTypes.arrayOf('string').isRequired,
  }).isRequired,
}
export default Body
