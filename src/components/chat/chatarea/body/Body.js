import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Body = ({ children }) => <div className="wrapper-body">{children}</div>

Body.propTypes = {
  children: PropTypes.shape({
    Message: PropTypes.element.isRequired,
  }).isRequired,
}
export default Body
