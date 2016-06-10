import * as bidItem from '../bidItem'
import * as user from '../user'

export default function handleSocketEvents(socket, namespace, store) {
  namespace.on('bid_state', (state) => {
    store.dispatch(bidItem.actions.setState(state))
  })

  // Attempt to join room
  const userObj = user.selectors.getModel(store.getState())
  socket.emit('join', userObj)

  socket.on('joined', (data) => {
    console.log(data)
  })

  socket.on('disconnect', () => {
    socket.emit('user disconnect', userObj)
  })
}
