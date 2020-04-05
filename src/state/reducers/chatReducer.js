import {
  SET_USER,
  NEW_MSG,
  SET_ROOM,
  ADD_MESSAGE,
  LEAVE_ROOM,
  GET_USERS,
  READ_MSG,
} from '../types'

const initialState = {
  username: null,
  room: null,
  messages: [],
  users: [],
  isLoggedIn: false,
  newMsg: false,
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
    case NEW_MSG:
      return {
        ...state,
        newMsg: action.payload,
      }

    case READ_MSG:
      return {
        ...state,
        newMsg: action.payload,
      }
    default:
      return state
  }
}
