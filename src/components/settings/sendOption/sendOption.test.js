import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import toJSON from 'enzyme-to-json'
import SendOption from './sendOption'

// mock state
const initialState = {}
const mockStore = configureStore()
const store = mockStore(initialState)

test('match snapshot', () => {
  const wrapper = shallow(<SendOption store={store} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
