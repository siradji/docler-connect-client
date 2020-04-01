import { ADD_MESSAGE, GET_USERS } from '../types'

//  socket io event to join a room after sign up
export const joinRoom = data => ({
  event: 'join',
  emit: true,
  payload: data,
})

//  socket io action to send user message to the server
export const sendMsg = message => ({
  event: 'sendMessage',
  emit: true,
  payload: message,
})
//  socket io event to recieve message from the server
export const getMessage = () => dispatch =>
  dispatch({
    event: 'message',
    handle: message =>
      dispatch({
        type: ADD_MESSAGE,
        payload: message,
      }),
  })

// Fet al users

export const getUsers = () => dispatch =>
  dispatch({
    event: 'users',
    handle: users =>
      dispatch({
        type: GET_USERS,
        payload: users,
      }),
  })
