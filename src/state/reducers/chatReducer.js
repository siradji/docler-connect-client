import { SET_USER, SET_ROOM, ADD_MESSAGE } from '../types'

const initialState = {
  username: null,
  room: null,
  messages: [],
  user: null,
  users: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.payload,
      }
    case SET_ROOM:
      return {
        ...state,
        room: action.payload,
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    default:
      return state
  }
}
