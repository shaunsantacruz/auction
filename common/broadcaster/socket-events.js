import * as bidBoard from '../bidBoard'
import * as bidLog from '../bidLog'
import * as user from '../user'
import * as users from '../users'

export default function handleSocketEvents(namespace, store) {
  namespace.on(bidBoard.actions.SET_STATE, (state) => {
    store.dispatch(bidBoard.actions.setState(state))
  })

  namespace.on(bidLog.actions.ADD, (log) => {
    store.dispatch(bidLog.actions.add(log))
  })

  namespace.on(users.actions.ADD, (user) => {
    store.dispatch(users.actions.add(user))
  })

  namespace.on(users.actions.REMOVE, (user) => {
    store.dispatch(users.actions.remove(user))
  })

  // TODO: Can all socket callbacks use 'action'?
  namespace.on('action', ({type, payload}) => {
    store.dispatch({
      type,
      payload
    })
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
