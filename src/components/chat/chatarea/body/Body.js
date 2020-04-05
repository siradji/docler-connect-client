/* eslint-disable react/prop-types */
import React from 'react'

import './style.scss'

const Body = ({ children }) => <div className="wrapper-body">{children}</div>

export default React.memo(Body)
