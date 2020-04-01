import { SET_SETTINGS } from '../types'

const initialState = {
  clockMode12: true,
  clockMode24: false,
  darkTheme: false,
  cltrEnter: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        clockMode12: action.payload[0],
        clockMode24: action.payload[2],
        darkTheme: action.payload[1],
        cltrEnter: action.payload[3],
      }
    default:
      return state
  }
}
