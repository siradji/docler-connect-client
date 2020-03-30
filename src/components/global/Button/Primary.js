import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

const Primary = ({ title, link }) => (
  // eslint-disable-next-line no-unused-expressions
  <>
    {link ? (
      <Link to={link}>
        <button className="primary-button">{title}</button>
      </Link>
    ) : (
      <button className="primary-button">{title}</button>
    )}
  </>
)

Primary.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

Primary.defaultProps = {
  link: '#',
}
export default Primary
