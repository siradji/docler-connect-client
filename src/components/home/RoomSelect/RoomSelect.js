import React from 'react'

import './style.scss'

const RoomSelect = () => (
  <select className="select">
    <option value="">Choose Department</option>
    <option value="engineering">Engineering</option>
    <option value="marketing">Marketing</option>
    <option value="HR">Human Resources</option>
    <option value="accounting">Accounting</option>
  </select>
)

export default RoomSelect
