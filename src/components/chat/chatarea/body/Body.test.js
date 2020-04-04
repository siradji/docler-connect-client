import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Body from './Body'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<Body />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
