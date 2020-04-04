import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Message from './Message'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<Message />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
