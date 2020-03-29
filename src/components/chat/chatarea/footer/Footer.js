import React from 'react'

import MessageButton from './MessageButton'
import MessageInput from './MessageInput'

import './style.scss'

const Footer = () => (
  <div className="wrapper-footer">
    <div className="inner-footer">
      <MessageInput />
      <MessageButton />
    </div>
  </div>
)

export default Footer
