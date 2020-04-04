import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import Username from './Username'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<Username />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
