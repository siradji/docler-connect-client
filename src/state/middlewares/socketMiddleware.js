import io from 'socket.io-client'

export default function socketMiddleware() {
  const socket = io('localhost:5000')

  return ({ dispatch }) => next => action => {
    if (typeof action === 'function') {
      return next(action)
    }

    const { emit, payload, event, leave, handle, ...rest } = action

    if (!event) {
      return next(action)
    }

    if (leave) {
      socket.emit('disconnect')
      socket.off()
    }

    if (emit) {
      socket.emit(event, payload)
      // eslint-disable-next-line consistent-return
      return
    }
    let handleEvent = handle
    if (typeof handleEvent === 'string') {
      handleEvent = result => dispatch({ type: handle, result, ...rest })
    }
    return socket.on(event, handleEvent)
  }
}
