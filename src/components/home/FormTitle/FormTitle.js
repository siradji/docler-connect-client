import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const FormTitle = ({ title }) => <h1 className="heading">{title}</h1>

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default FormTitle
