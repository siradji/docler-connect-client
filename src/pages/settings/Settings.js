/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/**
 * Settings page
 */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//  core components
import Sidepane from '../../components/chat/Sidebar'
import Username from '../../components/settings/username'
import InterfaceColor from '../../components/settings/interfaceColor'
import ClockMode from '../../components/settings/clockMode'
import SendOption from '../../components/settings/sendOption'
import Primary from '../../components/global/Button/Primary'

//  redux actions
import { getMessage, disconnect } from '../../state/actions/socketIO'
import { clearStorage } from '../../utils/localStorage'

import './style.scss'

const Settings = ({ getMessage, messages, disconnect }) => {
  //  listen for incoming messages when user is on another page
  useEffect(() => {
    getMessage()

    /**
     *   turn off the connection when component is unmounted to avoid reconnect
     */
    return () => {
      disconnect()
    }
  }, [messages])

  //  clear storage and reset settings to default
  const handleReset = () => {
    clearStorage()
  }
  return (
    <div className="wrapper-settings">
      <div className="sidepane-settings">
        <Sidepane />
      </div>
      <div className="div-settings">
        <Username />
        <InterfaceColor />
        <ClockMode />
        <SendOption />
        <Primary title="Reset Default" onClick={handleReset} />
      </div>
    </div>
  )
}

// prop types
Settings.propTypes = {
  getMessage: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
}

const mapDispatchToProps = {
  getMessage,
  disconnect,
}

const mapStateToProps = state => ({
  settings: state.settings,
  messages: state.chat.messages,
})
export default connect(mapStateToProps, mapDispatchToProps)(Settings)
