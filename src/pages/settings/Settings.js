/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// redux action
import { setSettings } from '../../state/actions/settingsActions'
import { disconnect } from '../../state/actions/socketIO'
//  core components
import Sidepane from '../../components/chat/Sidebar'
import Username from '../../components/settings/username'
import InterfaceColor from '../../components/settings/interfaceColor'
import ClockMode from '../../components/settings/clockMode'

import SendOption from '../../components/settings/sendOption'
import Primary from '../../components/global/Button/Primary'

//  function to clear reset settings on local storage
import { clearStorage } from '../../utils/localStorage'
import './style.scss'

// eslint-disable-next-line no-shadow
const Settings = ({ setSettings, disconnect }) => {
  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [])

  const handleReset = () => {
    clearStorage()
  }
  return (
    <div className="wrapper-settings">
      <div className="sidepane-settings">
        <Sidepane />
      </div>
      <div className="div-settings">
        <InterfaceColor />
        <ClockMode />
        <SendOption />
        <Primary title="Reset Default" onClick={handleReset} />
      </div>
    </div>
  )
}

Settings.propTypes = {
  setSettings: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  setSettings,
  disconnect,
}
export default connect(null, mapDispatchToProps)(Settings)
