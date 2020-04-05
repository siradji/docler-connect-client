/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

import './style.scss'

const Body = ({ children }) => {
  //  show last message scroll
  useEffect(() => {
    const container = document.querySelector('#body')
    container.scrollTop = container.scrollHeight
  }, [children])

  return (
    <div id="body" className="wrapper-body">
      {children}
    </div>
  )
}

export default React.memo(Body)
