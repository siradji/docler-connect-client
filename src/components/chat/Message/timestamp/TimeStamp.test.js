import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import TimeStamp from './TimeStamp'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<TimeStamp />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
