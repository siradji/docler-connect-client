import { ADD_MESSAGE } from '../types'

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

// export const message = dispatch => {}
