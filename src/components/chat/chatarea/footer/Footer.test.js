import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Footer from './Footer'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<Footer />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
