import React from 'react'
import { Link } from 'react-router-dom'
// core components
import FormTitle from '../../components/home/FormTitle'
import UserNameInput from '../../components/home/UserNameInput'
import RoomSelect from '../../components/home/RoomSelect'
import Button from '../../components/home/Button'
import ShowText from '../../components/home/showcase'

import './home.scss'

const Home = () => (
  <>
    <div className="bg-container">hello</div>
    <section className="wrapper-home">
      <div className="showcase-container">
        <ShowText />
      </div>
      <div className="card">
        <FormTitle title="Join your coworkers now" />
        <UserNameInput />
        <RoomSelect />
        <Button title="Join" link="/chat" />
      </div>
    </section>
  </>
)

export default Home
