/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

//  redux connect
import { connect } from 'react-redux'
// core components
import FormTitle from '../../components/home/FormTitle'
import UserNameInput from '../../components/global/UserNameInput'
import RoomSelect from '../../components/home/RoomSelect'
import Button from '../../components/global/Button/Primary'
import ShowText from '../../components/home/showcase'
// redux actions
import { getUser, getRoom, loadSettings } from '../../state/actions/settingsActions'

import { joinRoom } from '../../state/actions/socketIO'

import './home.scss'

// eslint-disable-next-line no-shadow
const Home = ({ joinRoom, getUser, getRoom, loadSettings }) => {
  const [username, setusername] = useState('')
  const [room, setRoom] = useState('Engineering')

  //  set username and room || load seetings from local storrage on page load
  useEffect(() => {
    getUser(username)
    getRoom(room)
    loadSettings()
  }, [username, room])

  //  handle to join chat
  const handleSubmit = e => {
    if (username === '') {
      e.preventDefault()
    } else {
      joinRoom({ username, room })
    }
  }
  return (
    <>
      <div className="bg-container" />
      <section className="wrapper-home">
        <div className="showcase-container">
          <ShowText />
        </div>
        <div className="card">
          <FormTitle title="Join your coworkers now" />
          <UserNameInput
            onChange={e => {
              setusername(e.target.value)
            }}
            value={username}
          />
          <RoomSelect
            onChange={e => {
              setRoom(e.target.value)
            }}
            value={room}
          />
          <Button title="Join" link="/chat" onClick={handleSubmit} />
        </div>
      </section>
    </>
  )
}

//  proptypes
Home.propTypes = {
  getUser: PropTypes.func.isRequired,
  getRoom: PropTypes.func.isRequired,
  loadSettings: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  getUser,
  joinRoom,
  getRoom,
  loadSettings,
}
export default connect(null, mapDispatchToProps)(Home)
