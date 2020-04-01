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
import { time12Hours, time24hours } from '../../utils/general'
// redux actions
import { getUser, getRoom } from '../../state/actions/settingsActions'

import './home.scss'

// eslint-disable-next-line no-shadow
const Home = ({ getUser, getRoom }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('Engineering')
  console.log(time12Hours())
  console.log(time24hours())
  useEffect(() => {
    getUser(name)
    getRoom(room)
  }, [room, name])
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
              setName(e.target.value)
            }}
            value={name}
          />
          <RoomSelect
            onChange={e => {
              setRoom(e.target.value)
            }}
            value={room}
          />
          <Button
            title="Join"
            link="/chat"
            onClick={
              e => (room === '' || name === '' ? e.preventDefault() : null)
              // eslint-disable-next-line react/jsx-curly-newline
            }
          />
        </div>
      </section>
    </>
  )
}

Home.propTypes = {
  getUser: PropTypes.func.isRequired,
  getRoom: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  getUser,
  getRoom,
}
export default connect(null, mapDispatchToProps)(Home)
