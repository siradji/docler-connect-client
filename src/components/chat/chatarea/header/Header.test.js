import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from './Header'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<Header />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
