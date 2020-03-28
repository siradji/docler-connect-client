import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

const Button = ({ title, link }) => (
  <Link to={link}>
    <button className="home-button">{title}</button>
  </Link>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Button
