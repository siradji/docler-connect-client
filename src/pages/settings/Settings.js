/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import Sidepane from '../../components/chat/Sidebar'

import Username from '../../components/settings/username'
import InterfaceColor from '../../components/settings/interfaceColor'
import ClockMode from '../../components/settings/clockMode'

import SendOption from '../../components/settings/sendOption'
import Primary from '../../components/global/Button/Primary'

import './style.scss'

const Settings = () => {
  const [twoFour, setTwoFour] = useState(true)
  const [oneTwo, setOneTwo] = useState(false)

  const handleTwoFour = () => {
    setTwoFour(!twoFour)
    oneTwo && setOneTwo(false)
  }
  const handleOneTwo = () => {
    setOneTwo(!oneTwo)
    twoFour && setTwoFour(false)
  }
  return (
    <div className="wrapper-settings">
      <div className="sidepane-settings">
        <Sidepane />
      </div>
      <div className="div-settings">
        <Username />
        <InterfaceColor />
        <div className="clocks-container">
          <ClockMode
            onChange={handleTwoFour}
            isChecked={twoFour}
            id="24-hours"
            value="24"
          />
          <ClockMode
            onChange={handleOneTwo}
            isChecked={oneTwo}
            value="12"
            id="12-hours"
          />
        </div>
        <SendOption />
        <Primary title="Reset Default" />
      </div>
    </div>
  )
}

export default Settings
