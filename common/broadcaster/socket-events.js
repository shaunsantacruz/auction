import * as bidBoard from '../bidBoard'
import * as bidLog from '../bidLog'
import * as user from '../user'

export default function handleSocketEvents(namespace, store) {
  namespace.on(bidBoard.actions.SET_STATE, (state) => {
    store.dispatch(bidBoard.actions.setState(state))
  })

  namespace.on(bidLog.actions.ADD, (log) => {
    store.dispatch(bidLog.actions.add(log))
  })

  // Attempt to join room
  const userObj = user.selectors.getModel(store.getState())
  namespace.emit('join', userObj)

  namespace.on('disconnect', () => {
    namespace.emit('user disconnect', userObj)
    //namespace.emit('disconnect reason', reason)
  })

  // Debug stuff
  if(process.env.NODE_ENV !== 'production') {

    namespace.on('joined', (data) => {
      console.log(`${data} joined`)
    })

    namespace.on('reconnect_error', (err) => {
      console.log('RECONNECT_ERROR ',err)
    })

    namespace.on('error', (err) => {
      console.log('SOCKET_ERROR ', err)
    })
  }
}
