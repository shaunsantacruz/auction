import * as bidItem from '../bidItem'
import * as user from '../user'
import * as chat from '../chat'

export default function handleSocketEvents(namespace, store) {

  // TODO: Can all socket callbacks use 'action'?
  namespace.on('action', ({type, payload}) => {
    store.dispatch({
      type,
      payload
    })
  })

  namespace.on(bidItem.actions.SET_PRICE, (price) => {
    store.dispatch(bidItem.actions.setPrice(price, {remote: false}))
  })

  namespace.on(bidItem.actions.MERGE_STATE, (state) => {
    store.dispatch(bidItem.actions.mergeState(state))
  })

  namespace.on(chat.actions.ADD_BY_ID, ({message, channelId}) => {
    store.dispatch(chat.actions.addById(message, channelId, {remote: false}))
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
