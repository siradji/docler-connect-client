import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import User from './User'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<User user="username" />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
