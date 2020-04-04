import { SET_SETTINGS } from '../types'

const initialState = {
  clockMode: 'on',
  darkTheme: 'light',
  cltrEnter: 'on',
}

export default (state = initialState, action) => {
  switch (action.type) {
    //  set setting recieved from local storage
    case SET_SETTINGS:
      return {
        ...state,
        clockMode: action.payload[0],
        darkTheme: action.payload[1],
        cltrEnter: action.payload[2],
      }
    default:
      return state
  }
}
