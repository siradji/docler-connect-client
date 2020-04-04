import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import ClockMode from './ClockMode'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<ClockMode />)
  expect(toJSON(Wrapper)).not.toBe(null)
})
