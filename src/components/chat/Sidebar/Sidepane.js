import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'

import links from './NavItems'

const Sidepane = () => (
  <div className="wrapper-sidebar">
    <div className="inner-sidebar">
      {links.map(({ name, path, icon }) => (
        <NavLink exact activeClassName="nav-active" key={name} to={path}>
          {icon}
        </NavLink>
      ))}
    </div>
  </div>
)

export default Sidepane
