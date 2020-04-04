import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ChatArea from './ChatArea'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<ChatArea />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
