import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

const Primary = ({ title, link, onClick }) => (
  // eslint-disable-next-line no-unused-expressions
  <>
    {link ? (
      <Link to={link}>
        <button className="primary-button" onClick={onClick}>
          {title}
        </button>
      </Link>
    ) : (
      <button className="primary-button" onClick={onClick}>
        {title}
      </button>
    )}
  </>
)

Primary.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
}

Primary.defaultProps = {
  link: '#',
  onClick: () => {},
}
export default Primary
