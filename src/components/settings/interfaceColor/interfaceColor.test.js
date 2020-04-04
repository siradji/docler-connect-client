import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import interfaceColor from './interfaceColor'

test('Renders Without Crashing', () => {
  const Wrapper = shallow(<interfaceColor />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
