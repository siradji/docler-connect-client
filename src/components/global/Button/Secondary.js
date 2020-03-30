import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

const Secondary = ({ title, link }) => (
  // eslint-disable-next-line no-unused-expressions
  <>
    {link.length ? (
      <Link to={link}>
        <button className="secondary-button">{title}</button>
      </Link>
    ) : (
      <button className="secondary-button">{title}</button>
    )}
  </>
)

Secondary.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}
Secondary.defaultProps = {
  link: '#',
}

export default Secondary
