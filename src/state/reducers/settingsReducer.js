import { SET_SETTINGS } from '../types'

const initialState = {
  clockMode: false,
  darkTheme: false,
  cltrEnter: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      console.log(action.payload)
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
