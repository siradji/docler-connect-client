import { SET_USER, SET_ROOM, ADD_MESSAGE, GET_USERS } from '../types'

const initialState = {
  username: null,
  room: null,
  messages: [],
  user: null,
  users: [],
  isLoggedIn: false,
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
        isLoggedIn: true,
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
