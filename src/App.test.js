import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import toJSON from 'enzyme-to-json'
import App from './App'

// mock state
const initialState = {
  darkTheme: false,
}
const mockStore = configureStore()
const store = mockStore(initialState)

test('match snapshot', () => {
  const wrapper = shallow(<App store={store} settings="dark" />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
