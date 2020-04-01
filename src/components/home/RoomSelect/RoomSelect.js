import React from 'react'

import PropTypes from 'prop-types'

import './style.scss'

const RoomSelect = ({ onChange }) => (
  <select className="select" onChange={onChange}>
    <option value="engineering">Engineering</option>
    <option value="marketing">Marketing</option>
    <option value="HR">Human Resources</option>
    <option value="accounting">Accounting</option>
  </select>
)
RoomSelect.propTypes = {
  onChange: PropTypes.func,
}
export default RoomSelect
