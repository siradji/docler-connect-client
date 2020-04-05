/* eslint-disable consistent-return */
import io from 'socket.io-client'

export default function socketMiddleware() {
  const socket = io('https://docler-connect-server.herokuapp.com/')

  return ({ dispatch }) => next => action => {
    if (typeof action === 'function') {
      return next(action)
    }

    const { emit, payload, event, leave, handle, ...rest } = action

    if (!event) {
      return next(action)
    }

    if (leave) {
      // socket.emit(event)
      socket.off()
      return
    }

    if (emit) {
      socket.emit(event, payload)
      return
    }
    let handleEvent = handle
    if (typeof handleEvent === 'string') {
      handleEvent = result => dispatch({ type: handle, result, ...rest })
    }
    return socket.on(event, handleEvent)
  }
}
