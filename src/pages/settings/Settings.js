/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import Sidepane from '../../components/chat/Sidebar'

import Username from '../../components/settings/username'
import InterfaceColor from '../../components/settings/interfaceColor'
import ClockMode from '../../components/settings/clockMode'

import SendOption from '../../components/settings/sendOption'
import Primary from '../../components/global/Button/Primary'
import { setItem, clearStorage } from '../../utils/localStorage'

import './style.scss'

const Settings = () => {
  const [time24hours, setTime24Hours] = useState(true)
  const [time12Hours, setTime12Hours] = useState(false)
  const [sendOption, setSendOption] = useState(false)
  const [themeColor, setThemeColor] = useState(false)

  useEffect(() => {
    // storing  settings state to storage
    const storageItems = [
      { name: 'time24hours', value: time24hours },
      { name: 'time12hours', value: time12Hours },
      { name: 'themeColor', value: themeColor },
      { name: 'sendOption', value: sendOption },
    ]

    setItem(storageItems)
  }, [themeColor, time24hours, time12Hours, sendOption])

  // useEffect(() => {

  //   }
  // }, [])

  //  handles for the inputs
  const handleTime24Hours = () => {
    setTime24Hours(!time24hours)
    time12Hours && setTime12Hours(true)
  }
  const handleTime12Hours = () => {
    setTime12Hours(!time12Hours)
    time24hours && setTime24Hours(false)
  }

  const handleThemeColor = () => {
    setThemeColor(!themeColor)
  }

  const handleSendOption = () => {
    setSendOption(!sendOption)
  }

  const handleReset = () => {
    clearStorage()
    setThemeColor(false)
    setSendOption(false)
    setTime12Hours(false)
    setTime24Hours(true)
  }
  return (
    <div className="wrapper-settings">
      <div className="sidepane-settings">
        <Sidepane />
      </div>
      <div className="div-settings">
        <Username />
        <InterfaceColor
          onChange={handleThemeColor}
          value={themeColor}
          isChecked={themeColor}
        />
        <div className="clocks-container">
          <ClockMode
            onChange={handleTime24Hours}
            isChecked={time24hours}
            value="24"
            title="24 hour clock mode"
          />
          <ClockMode
            onChange={handleTime12Hours}
            isChecked={time12Hours}
            value="12"
            title="12 hour clock mode"
          />
        </div>
        <SendOption
          onChange={handleSendOption}
          value={sendOption}
          isChecked={sendOption}
        />
        <Primary title="Reset Default" onClick={handleReset} />
      </div>
    </div>
  )
}

export default Settings
