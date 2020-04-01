import React from 'react'
import PropTypes from 'prop-types'

import { time12Hours, time24hours } from '../../../utils/general'

const TimeStamp = ({ clockMode }) => (
  <div className="msg-bottom">
    <p className="msg-time">{clockMode ? time24hours() : time12Hours()}</p>
  </div>
)

TimeStamp.propTypes = {
  clockMode: PropTypes.bool.isRequired,
}

export default TimeStamp
