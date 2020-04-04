import { SET_USER, SET_ROOM, ADD_MESSAGE, LEAVE_ROOM, GET_USERS } from '../types'

const initialState = {
  username: null,
  room: null,
  messages: [],
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
        users: [],
        messages: [],
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
    case LEAVE_ROOM:
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state
  }
}
