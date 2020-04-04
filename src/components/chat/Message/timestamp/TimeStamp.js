import React from 'react'
import PropTypes from 'prop-types'

import { time12Hours, time24hours } from '../../../../utils/general'

const TimeStamp = ({ clockMode }) => (
  <div className="msg-bottom">
    <p className="msg-time">{clockMode === '24' ? time12Hours() : time24hours()}</p>
  </div>
)

TimeStamp.propTypes = {
  clockMode: PropTypes.string.isRequired,
}

export default TimeStamp
