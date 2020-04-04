import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import SendOption from './sendOption'

test('match snapshot', () => {
  const Wrapper = shallow(<SendOption />)
  expect(toJSON(Wrapper)).toMatchSnapshot()
})
