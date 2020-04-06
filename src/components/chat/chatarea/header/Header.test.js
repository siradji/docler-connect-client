import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import toJSON from 'enzyme-to-json'
import Header from './Header'

// mock state
const initialState = {
  darkTheme: false,
}
const mockStore = configureStore()
const store = mockStore(initialState)

test('match snapshot', () => {
  const wrapper = shallow(<Header store={store} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
