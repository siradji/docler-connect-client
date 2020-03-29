import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faComments, faCog } from '@fortawesome/free-solid-svg-icons'

const chatIcon = <FontAwesomeIcon size="lg" icon={faComments} />
const userIcon = <FontAwesomeIcon size="lg" icon={faUsers} />
const settingsIcon = <FontAwesomeIcon size="lg" icon={faCog} />

const links = [
  {
    name: 'Chat',
    path: '/chat',
    icon: chatIcon,
  },
  {
    name: 'Users',
    path: '/Users',
    icon: userIcon,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: settingsIcon,
  },
]
export default links
