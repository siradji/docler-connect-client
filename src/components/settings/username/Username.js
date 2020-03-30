import React from 'react'

import UserNameInput from '../../global/UserNameInput'

import '../style.scss'

const Username = () => (
  <div className="settings-username">
    <p className="username-label">Change Username</p>
    <UserNameInput />
  </div>
)

export default Username
